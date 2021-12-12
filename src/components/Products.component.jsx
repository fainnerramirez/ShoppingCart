import { Container, Heading } from "@chakra-ui/react";
import ProductsItem from "./ProductsItem.component";

const Products = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Heading
        fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        textAlign={{ base: "center" }}
        p={10}
      >
        Productos
      </Heading>
      <ProductsItem />
    </Container>
  );
};

export default Products;
