import {
  Box,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Button,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";
import * as COLOR from "../utils/Colors";

const DetailsProductChildren = ({
  nameProduct,
  category,
  description,
  price,
}) => {
  const bgButton = useColorModeValue(COLOR.secondary, COLOR.primary);

  return (
    <Box>
      <Box>
        <Text>
          Categoria: <Tag>Pastelería</Tag>
        </Text>
        <Heading textAlign={{ base: "center", md: "left" }}>
          {nameProduct}
        </Heading>
        <Text textAlign="justify" mt={5}>
          {description}
        </Text>
      </Box>
      <Box
        display="flex"
        w={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Stat mt={5} w="45%" textAlign="left">
          <StatLabel>Precio</StatLabel>
          <StatNumber>$ {price}</StatNumber>
          <StatHelpText>Venta al por mayor</StatHelpText>
        </Stat>
        <Button
          as="a"
          bg={bgButton}
          color="gray.50"
          cursor="pointer"
          w="45%"
          m="auto"
        >
          <Text mr={3}>Agregar</Text>
          <RiShoppingCartLine size="1.5rem" />
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsProductChildren;
