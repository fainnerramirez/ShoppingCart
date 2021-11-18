import { useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import * as COLOR from "../utils/Colors";
import CardProducts from "./CardProducts.component";

const ProductsItemCart: React.FC = () => {
    const color = useColorModeValue(COLOR.dark, "gray.50");

    const carrito = [
        {
            id: 1,
            productName: "Smart Watch",
        },
        {
            id: 2,
            productName: "Juguete de unicornio",
        },
        {
            id: 3,
            productName: "Zapillas niña",
        },
        {
            id: 4,
            productName: "Bloques de construcción",
        },
        {
            id: 5,
            productName: "Muñeco llorón",
        },
        {
            id: 6,
            productName: "Carro control remoto",
        },
    ];

    return (
        <SimpleGrid columns={[]} spacingY="20px" mb={10}>
            {carrito.map((cart) => {
                return <CardProducts key={cart.id} name={cart.productName} />;
            })}
        </SimpleGrid>
    );
};

export default ProductsItemCart;
