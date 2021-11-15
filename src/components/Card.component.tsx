import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { propsCard } from "../utils/Types";
//Styled-components
import { Card } from "../styles/Products.d";
//const
import * as COLOR from "../utils/Colors";

const CardProduct: React.FC<propsCard> = ({ name, description }) => {
  return (
    <Card>
      <Text textAlign={"center"}>{name}</Text>
      <Box>{description}</Box>
      <Box>
        <Button>Agregar al carrito</Button>
        <Button>Details</Button>
      </Box>
    </Card>
  );
};

export default CardProduct;
