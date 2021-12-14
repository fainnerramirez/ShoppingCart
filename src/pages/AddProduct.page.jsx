import { Box, Text, Divider } from "@chakra-ui/react";
import AddProduct from "../components/AddProduct.component";

const AddProductPage = () => {
  return (
    <Box margin={"auto"} w={{ base: "90%", sm: "90%", lg: "40%" }} mt={20}>
      <Text fontSize={"5xl"} textAlign={"center"} fontWeight={"bold"}>
        Regístro de productos
      </Text>
      <Divider />
      <AddProduct />
    </Box>
  );
};

export default AddProductPage;
