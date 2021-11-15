import { Container, SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem.component";
//Styled-component
import { Title } from "../styles/Products.d";

const Products: React.FC = (props) => {
  return (
    <Container maxW="container.xl">
      <Title>Lista de Produtos</Title>
      <SimpleGrid columns={[1, 2, 3, 3]}>
        <ProductItem />
      </SimpleGrid>
    </Container>
  );
};

export default Products;
