import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  // useDisclosure able to using boolean like hamburgericon
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";

const Links = [
  { LinkName: "Products", path: "/products" },
  { LinkName: "ShoppingCart", path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.800"),
    }}
  >
    {children}
  </Link>
);
const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon as={GiTechnoHeart} h={6} w={6} color="orange.400" />
              <Text fontWeight="extrabold">Tech Lines</Text>
            </Flex>
          </Link>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => {
              // console.log(link.LinkName);
              return (
                <NavLink key={link.LinkName} path={link.path}>
                  {link.LinkName}
                </NavLink>
              );
            })}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Icon
            as={colorMode === "light" ? MoonIcon : SunIcon}
            alignSelf="center"
            onClick={() => toggleColorMode()}
          ></Icon>

          <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize="sm"
            fontWeight={400}
            variant="link"
            // textDecoration="none"
          >
            Sign In
          </Button>
          <Button
            as={ReactLink}
            to="/registration"
            m={2}
            fontSize="sm"
            fontWeight={600}
            bg="orange.400"
            _hover={{ bg: "orange.500" }}
            color="white"
            display={{ base: "none", md: "inline-flex" }}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack
            as="nav"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {Links.map((link) => {
              // console.log(link.LinkName);
              return (
                <NavLink key={link.LinkName} path={link.path}>
                  {link.LinkName}
                </NavLink>
              );
            })}
            <NavLink path="/registration">Sign Up</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
