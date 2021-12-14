//Chakra UI
import {
  Container,
  Text,
  Box,
  Heading,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
//Icons
import { ArrowForwardIcon } from "@chakra-ui/icons";
//Types
//react-router-dom
import { Link } from "react-router-dom";
//Const
import * as COLOR from "../utils/Colors";
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect } from "react";

const Home = ({ title, subtitle, description }) => {
  const color = useColorModeValue(COLOR.dark, "gray.50");
  const bgButton = useColorModeValue(COLOR.secondary, COLOR.primary);

  const { products } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(products));
  }, [products]);

  return (
    <Container maxW={{ base: "100%", sm: "100%", md: "70%", lg: "80%" }} p={0}>
      <Flex
        mt={10}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Box maxW="full">
          <Heading as="h1" mt={20} textAlign="center">
            <Text
              bgGradient={COLOR.bgGradientText}
              bgClip="text"
              fontSize={{ base: "2rem", sm: "2rem", md: "3rem", lg: "4rem" }}
            >
              {title}
            </Text>
            <Text
              color={COLOR.primary}
              fontSize={{ base: "2rem", sm: "2rem", md: "3rem", lg: "3.5rem" }}
            >
              {subtitle}
            </Text>
          </Heading>

          <Text
            mt={10}
            fontSize={{ base: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" }}
            textAlign="center"
            color={color}
          >
            {description}
          </Text>
        </Box>

        <Box mt={10}>
          <Link to="/products">
            <Button as="a" bg={bgButton} color="gray.50" cursor="pointer">
              Comprar
              <ArrowForwardIcon ml={2} w={6} h={5} />
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
