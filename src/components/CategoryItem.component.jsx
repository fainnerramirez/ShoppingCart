import { useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import CardCategory from "./CardCategorys.component";
import * as COLOR from "../utils/Colors";

const CategoryItem = () => {
  const color = useColorModeValue(COLOR.dark, "gray.50");

  const categorys = [
    {
      id: 1,
      categoria: "Deportes",
    },
    {
      id: 2,
      categoria: "Comida",
    },
    {
      id: 3,
      categoria: "Farmacia",
    },
    {
      id: 4,
      categoria: "Express",
    },
  ];

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacingY="20px" mb={10}>
      {categorys.map((category) => {
        return (
          <CardCategory key={category.id} categoria={category.categoria} />
        );
      })}
    </SimpleGrid>
  );
};

export default CategoryItem;
