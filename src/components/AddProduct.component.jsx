import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Select,
  Button,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import * as COLOR from "../utils/Colors";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const AddProduct = () => {
  const bgButton = useColorModeValue(COLOR.secondary, COLOR.primary);
  const context = useContext(ProductContext);
  console.log("context", context);

  const { handleAddProduct, handleInputChange } = useContext(ProductContext);

  return (
    <Box
      as="form"
      onSubmit={handleAddProduct}
      d={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={{ base: "100%", sm: "100%" }}
      h={{ base: "70%", sm: "70%" }}
    >
      <FormControl id="nameProductForm" mt={10}>
        <FormLabel htmlFor="nameProduct">Nombre del producto</FormLabel>
        <Input
          id="nameProduct"
          type="text"
          name="nameProduct"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <FormHelperText>Max. 10 caractéres</FormHelperText>
      </FormControl>
      <FormControl id="priceProduct" mt={10}>
        <FormLabel>Precio del producto</FormLabel>
        <Input
          type="number"
          autoComplete="off"
          name="price"
          onChange={handleInputChange}
        />
        <FormHelperText>$COP</FormHelperText>
      </FormControl>
      <FormControl id="categoriaProduct" mt={10}>
        <Select
          placeholder="Escoge Categoria"
          name="category"
          onChange={handleInputChange}
        >
          <option value="category one">Categoria uno</option>
          <option value="category two">Categoria dos</option>
          <option value="category tres">Categoria tres</option>
        </Select>
      </FormControl>
      <Textarea
        placeholder="Descripción del producto"
        name="description"
        onChange={handleInputChange}
      ></Textarea>
      <Box mt={10}>
        <Button type="submit" bg={bgButton} color="gray.50" cursor="pointer">
          Guardar Producto
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
