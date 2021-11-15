import { Box, Image, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { propsCategory } from "../utils/Types";
//const
import * as COLOR from "../utils/Colors";

const CardCategory: React.FC<propsCategory> = ({ categoria }) => {
  return (
    <Box
      as="div"
      w={{ base: "90%", sm: "90%" }}
      bg={useColorModeValue("gray.200", COLOR.darkMin)}
      borderTopRadius={15}
      borderBottomRadius={10}
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

export default CardCategory;
