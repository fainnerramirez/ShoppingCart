import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Button,
  Container,
} from "@chakra-ui/react";
import * as COLOR from "../utils/Colors";
import { RiShoppingCartLine } from "react-icons/ri";

const ProdusctsDetails: React.FC = () => {
  const bgButton = useColorModeValue(COLOR.secondary, COLOR.primary);

  return (
    <Container maxW="container.xl">
      <Flex
        as="div"
        w="100%"
        marginX="auto"
        direction={{ base: "column", sm: "column", md: "row" }}
        mt={10}
      >
        <Box p={4} w={{ base: "100%", md: "100%" }}>
          <Image
            src="https://i.imgur.com/nwDRFEe.jpg"
            alt="image product detail"
            h={{ base: "100%" }}
            w={{ base: "100%" }}
            borderRadius={10}
          ></Image>
        </Box>
        <Flex
          direction={{ base: "column" }}
          p={4}
          w={{ base: "100%", sm: "100%", lg: "80%" }}
        >
          <Box>
            <Heading textAlign={{ base: "center", md: "left" }}>
              Name Product
            </Heading>
            <Text textAlign="justify" mt={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi
              assumenda alias suscipit odio, distinctio eius quidem temporibus,
              asperiores at recusandae natus ipsum sed cum adipisci eum
              laboriosam veniam, eaque aperiam tenetur repellat. Voluptatum odit
              cum et,
            </Text>
          </Box>
          <Box
            display="flex"
            w={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Stat mt={5} w="45%" textAlign="left">
              <StatLabel>Precio</StatLabel>
              <StatNumber>$49.00</StatNumber>
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
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProdusctsDetails;
