import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mt={20} w={{ base: "90%", sm: "90%", xl: "100%" }} m={"auto"}>
      <Box py={7}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2021 Fainner Ramírez | Carlos Borrego. Todos los derechos reservados
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
