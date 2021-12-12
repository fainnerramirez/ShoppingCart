import {
  Box,
  Image,
  Text,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
//const
import * as COLOR from "../utils/Colors";
//icons
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CardProducts = ({ name, score }) => {
  const bgButton = useColorModeValue(COLOR.secondary, COLOR.primary);

  const { products, handleAddProduct } = useContext(ProductContext);

  console.log("context", products);

  return (
    <Box
      as="div"
      w={{ base: "90%", sm: "90%" }}
      bg={useColorModeValue("gray.200", COLOR.darkMin)}
      borderRadius={20}
      m="auto"
    >
      <Flex direction={{ base: "column", sm: "column", lg: "row" }}>
        <Box p={3} w={{ base: "100%", lg: "50%" }}>
          <Image
            src="https://i.imgur.com/nwDRFEe.jpg"
            alt="Image product"
            w="100%"
            borderRadius={20}
          ></Image>
        </Box>
        <Flex
          direction={{ base: "column", sm: "column", lg: "column" }}
          m={{ lg: "auto" }}
        >
          <Box>
            <Text
              textAlign={"left"}
              p={4}
              color={useColorModeValue("gray.900", "gray.50")}
              fontSize="1.3rem"
              fontWeight="bold"
            >
              {name}
            </Text>
          </Box>
          <Box p={4} display="flex" alignItems={"center"}>
            <StarIcon mr={1} color={COLOR.primary} />
            <StarIcon mr={1} color={COLOR.primary} />
            <StarIcon mr={1} color={COLOR.primary} />
            <StarIcon mr={1} color={COLOR.primary} />
            <StarIcon mr={1} />
            <Text m={2}>{score}</Text>
          </Box>
          <Box display="flex" alignItems="center" mb={5} w="full">
            <Button
              as="a"
              bg={bgButton}
              color="gray.50"
              cursor="pointer"
              w="90%"
              m="auto"
            >
              <Link to="/products_details">Ver Detalles</Link>
            </Button>
            <Button
              as="a"
              bg={bgButton}
              color="gray.50"
              cursor="pointer"
              w="90%"
              m="auto"
              onClick={() => handleAddProduct()}
            >
              Agregar
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardProducts;
