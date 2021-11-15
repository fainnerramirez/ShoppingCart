import { Container, Divider } from "@chakra-ui/react";
import Categorys from "../components/Categorys.component";
import Products from "../components/Products.component";

const ProductsPage: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Categorys />
      <Divider />
      <Products />
    </Container>
  );
};

export default ProductsPage;
