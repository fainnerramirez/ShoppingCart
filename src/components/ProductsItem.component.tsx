import { SimpleGrid } from "@chakra-ui/react";
import CardProducts from "./CardProducts.component";
import { products } from "../data/DataProducts";

const ProductsItem: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 2]} spacingY="20px" mb={10}>
      {products.map((product) => {
        return (
          <CardProducts
            key={product.id}
            name={product.name}
            score={product.score}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default ProductsItem;
