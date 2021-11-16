import { Container, Divider, useColorModeValue } from "@chakra-ui/react";
import Categorys from "../components/Categorys.component";
import Products from "../components/Products.component";

const ProductsPage: React.FC = () => {
  const colorDivider = useColorModeValue("gray.400", "gray.300");
  return (
    <Container maxW="container.xl" p={0}>
      <Categorys />
      <Divider borderColor={colorDivider} />
      <Products />
    </Container>
  );
};

export default ProductsPage;
