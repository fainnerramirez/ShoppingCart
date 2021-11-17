import { Container, Heading } from "@chakra-ui/react";
import ProductsItemCart from "./ProductsItemCart.component";

const Cart: React.FC = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Heading
                fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                textAlign={{ base: "center" }}
                p={10}
            >
                Carrito De Compras
            </Heading>
            <ProductsItemCart/>
        </Container>
    );
};

export default Cart;