import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Select,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import * as COLOR from "../utils/Colors";

const AddProduct = () => {
  const bgButton = useColorModeValue(COLOR.secondary, COLOR.primary);

  const handleSubmitProduct = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmitProduct}
      d={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={{ base: "100%", sm: "100%" }}
      h={{ base: "70%", sm: "70%" }}
    >
      <FormControl id="nameProduct" mt={10}>
        <FormLabel htmlFor="nameProduct">Nombre del producto</FormLabel>
        <Input
          id="nameProduct"
          type="text"
          name="nameProduct"
          autoComplete="off"
        />
        <FormHelperText>Max. 10 caractéres</FormHelperText>
      </FormControl>
      <FormControl id="priceProduct" mt={10}>
        <FormLabel>Precio del producto</FormLabel>
        <Input type="number" autoComplete="off" />
        <FormHelperText>$COP</FormHelperText>
      </FormControl>
      <FormControl id="categoriaProduct" mt={10}>
        <Select placeholder="Escoge Categoria">
          <option value="">Categoria uno</option>
          <option value="">Categoria dos</option>
          <option value="">Categoria tres</option>
        </Select>
      </FormControl>
      <Box mt={10}>
        <Button type="submit" bg={bgButton} color="gray.50" cursor="pointer">
          Guardar Producto
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
