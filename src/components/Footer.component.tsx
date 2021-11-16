import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import * as COLOR from "../utils/Colors";

const Footer: React.FC = () => {
  return (
    <Box bg={useColorModeValue("gray.50", COLOR.darkMin)} mt={20}>
      <Box py={7}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2021 Fainner Ramírez | Carlos Borrego. Todos los derechos reservados
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
