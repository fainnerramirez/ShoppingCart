import { SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CardProducts from "./CardProducts.component";

const ProductsUser = () => {
  const { products } = useContext(ProductContext);

  return (
    <SimpleGrid columns={[1, 2, 3, 2]} spacingY="20px" mb={10}>
      {products?.map((product) =>
        product.select ? <CardProducts key={product.id} {...product} /> : null
      )}
    </SimpleGrid>
  );
};

export default ProductsUser;
