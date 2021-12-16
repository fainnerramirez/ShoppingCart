import { Flex, Box, Image, Container } from "@chakra-ui/react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import DetailsProductChildren from "./DetailsProductChildren";

const ProdusctsDetails = ({ id }) => {
  const { products } = useContext(ProductContext);

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
          {products.map((product) => (
            <DetailsProductChildren {...product} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProdusctsDetails;
