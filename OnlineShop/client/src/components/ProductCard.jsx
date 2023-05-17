import { useState } from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const Rating = ({ rating, numberOfReviews }) => {
  const { iconSize, setIconSize } = useState("14px");
  return (
    <Flex>
      <HStack spacing="2px">
        <StarIcon size={iconSize} w="14px" color="orange.500" />
        <StarIcon
          size={iconSize}
          w="14px"
          color={rating >= 2 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w="14px"
          color={rating >= 3 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w="14px"
          color={rating >= 4 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w="14px"
          color={rating >= 5 ? "orange.500" : "gray.200"}
        />
      </HStack>
      <Text fontSize="md" fontWeight="bold" md="4px">
        {`${numberOfReviews} ${numberOfReviews === 1 ? "Review" : "Reviews"}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Stack
      mt="5"
      p="2"
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW="240px"
      h="450px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="green.300"
        ></Circle>
      )}
      {product.stock < 1 && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.300"
        ></Circle>
      )}
      <Image src={product.image} alt={product.name} roundedTop="lg" />
      <Box flex="1" maxH="5" alignItems="baseline"></Box>
      {product.stock < 1 && (
        <Badge
          rounded="full"
          fontSize="0.8rem"
          px="2"
          colorScheme="red"
          //   textAlign="center"
          alignSelf="start"
        >
          Sold Out
        </Badge>
      )}
      {product.isNew && (
        <Badge
          rounded="full"
          fontSize="0.8rem"
          px="2"
          colorScheme="green"
          //   textAlign="center"
          alignSelf="start"
        >
          New
        </Badge>
      )}
      <Flex mt="1" justifyContent="space-between" alignItems="center">
        <Link
          as={ReactLink}
          to={`/product/${product._id}`}
          pt="2"
          cursor="pointer"
        >
          <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" py="2">
        <Rating rating={product.rating} numberOfReviews={product.numReviews} />
      </Flex>
      <Flex justifyContent="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color="gray.600" fontSize="lg">
            $
          </Box>
          {product.price}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="white"
          placement="top"
          color="gray.800"
          fontSize="1.2em"
        >
          <Button variant="ghost" display="flex" isDisabled={product.stock < 1}>
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf="center" />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
