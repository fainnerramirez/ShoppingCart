import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
//const
import * as COLOR from "../utils/Colors";
//Icons
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CardCategory = ({ categoria }) => {
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
          src="https://i.imgur.com/nwDRFEe.jpg"
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
          <ArrowForwardIcon ml={2} w={6} h={6} />
        </Text>
      </Box>
    </Box>
  );
};

export default CardCategory;
