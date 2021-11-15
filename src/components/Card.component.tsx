import { Box, Image, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { propsCard } from "../utils/Types";
//Styled-components
//const
import * as COLOR from "../utils/Colors";

const CardProduct: React.FC<propsCard> = ({ name, categoria }) => {
  return (
    <Box
      as="div"
      w="18rem"
      bg={useColorModeValue("gray.200", COLOR.darkMin)}
      borderRadius={15}
      m="auto"
    >
      <Box p={0}>
        <Image
          src="https://i.imgur.com/fa1xDYZ.jpg"
          alt="Image product"
          borderTopRadius={15}
          borderBottomRadius={50}
        ></Image>
      </Box>
      <Box>
        <Text
          textAlign={"center"}
          p={4}
          color={useColorModeValue("gray.900", "gray.50")}
          fontWeight="bold"
        >
          {categoria}
        </Text>
      </Box>
    </Box>
  );
};

export default CardProduct;
