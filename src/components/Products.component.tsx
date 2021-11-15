import { Container, SimpleGrid, Heading } from "@chakra-ui/react";
import ProductItem from "./ProductItem.component";
//Styled-component

const Products: React.FC = (props) => {
  return (
    <Container maxW="container.xl">
      <Heading
        fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "5xl" }}
        textAlign={"center"}
        p={10}
      >
        Categorias
      </Heading>
      <ProductItem />
    </Container>
  );
};

export default Products;
