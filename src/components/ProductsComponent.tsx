import { Text, Container } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const Products: React.FC = () => {

    const product = [
        {id: 1, productName: "product 1", description: "description example"},
        {id: 2, productName: "product 1", description: "description example"},
        {id: 3, productName: "product 1", description: "description example"},
        {id: 4, productName: "product 1", description: "description example"},
        {id: 5, productName: "product 1", description: "description example"},
        {id: 6, productName: "product 1", description: "description example"},
        {id: 7, productName: "product 1", description: "description example"},
        {id: 8, productName: "product 1", description: "description example"},
        {id: 9, productName: "product 1", description: "description example"},
        {id: 10, productName: "product 1", description: "description example"}
    ]

    return(
        <Container maxW="container.xl">
            {
                product.map( product => {
                    return <ProductItem key={ product.id } />
                })
            }
        </Container>
    )
}

export default Products;