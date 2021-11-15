import { Container, Divider } from "@chakra-ui/react";
import Category from "../components/Category.component";

const ProductsPage: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Category />
      <Divider />
    </Container>
  );
};

export default ProductsPage;
