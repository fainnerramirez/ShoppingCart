import { useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import * as COLOR from "../utils/Colors";
import CardProducts from "./CardProducts.component";

const ProductsItem: React.FC = () => {
  const color = useColorModeValue(COLOR.dark, "gray.50");

  const products = [
    {
      id: 1,
      productName: "Pastelería",
    },
    {
      id: 2,
      productName: "Juguetería",
    },
    {
      id: 3,
      productName: "Zapatos",
    },
    {
      id: 4,
      productName: "Comida",
    },
    {
      id: 5,
      productName: "Mercardo",
    },
    {
      id: 6,
      productName: "Refrescos",
    },
  ];

  return (
    <SimpleGrid columns={[1, 2, 3, 2]} spacingY="20px" mb={10}>
      {products.map((product) => {
        return <CardProducts key={product.id} name={product.productName} />;
      })}
    </SimpleGrid>
  );
};

export default ProductsItem;
