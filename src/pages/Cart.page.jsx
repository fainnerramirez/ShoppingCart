import { Container, Divider, useColorModeValue } from "@chakra-ui/react";
import Cart from "../components/CartComponent";

const CartPage = () => {
  const colorDivider = useColorModeValue("gray.400", "gray.300");

  return (
    <Container maxW="container.xl" p={0}>
      <Divider borderColor={colorDivider} />
      <Cart />
    </Container>
  );
};

export default CartPage;
