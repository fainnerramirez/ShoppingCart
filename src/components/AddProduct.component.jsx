import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const AddProduct = () => {
  return (
    <FormControl id="email">
      <FormLabel>Nombre del producto</FormLabel>
      <Input type="email" />
      <FormHelperText>Max. 10 caractéres</FormHelperText>
    </FormControl>
  );
};

export default AddProduct;
