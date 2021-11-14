import { Container, SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const Products: React.FC = () => {

    return(
        <Container maxW="container.xl">
            <SimpleGrid columns={[1, 2, 3, 3]}>
                <ProductItem />
            </SimpleGrid>
        </Container>
    )
}

export default Products;