import { Container, Divider } from "@chakra-ui/react";
import Categorys from "../components/Categorys.component";

const ProductsPage: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Categorys />
      <Divider />
    </Container>
  );
};

export default ProductsPage;
