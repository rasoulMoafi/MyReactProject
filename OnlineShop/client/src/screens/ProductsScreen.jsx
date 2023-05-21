import { useEffect } from "react";
import { Center, Wrap, WrapItem,Spinner,Stack,Alert,AlertIcon,AlertTitle,AlertDescription } from "@chakra-ui/react";
// import { products } from "../products";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const { loading, error, products } = productsList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
      {loading ? (
      <Stack direction="row" spacing={4}>
        <Spinner
          mt={20}
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
          color="orange.500"
          size="xl"
        />
      </Stack>
      ) : error ? (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>We are sorry!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
      ) : ( products.map((product) => (
      <WrapItem key={product._id}>
        <Center w="250px" h="550px">
          <ProductCard product={product} />
        </Center>
      </WrapItem>
      )) )}
    </Wrap>
  );
};

export default ProductsScreen;
