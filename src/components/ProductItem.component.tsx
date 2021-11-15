import { useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import CardProduct from "./Card.component";
import * as COLOR from "../utils/Colors";

const ProductItem: React.FC = () => {
  const color = useColorModeValue(COLOR.dark, "gray.50");

  const products = [
    {
      id: 1,
      productName: "product 1",
      categoria: "Deportes",
    },
    {
      id: 2,
      productName: "product 1",
      categoria: "Comida",
    },
    {
      id: 3,
      productName: "product 1",
      categoria: "Farmacia",
    },
    {
      id: 4,
      productName: "product 1",
      categoria: "Express",
    },
  ];

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="10px">
      {products.map((product) => {
        return (
          <CardProduct
            key={product.id}
            name={product.productName}
            categoria={product.categoria}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default ProductItem;
