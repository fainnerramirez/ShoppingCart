import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NotFound from "../assets/NotFound404.jpg";
import { Link } from "react-router-dom";
import * as COLOR from "../utils/Colors";

const NotFound404 = () => {
  const color = useColorModeValue(COLOR.primary, COLOR.secondary);

  return (
    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <Box>
        <Image
          src={NotFound}
          alt="image Not Found"
          mt={20}
          w={400}
          borderRadius={10}
        />
      </Box>
      <Heading as="h1" m={10}>
        Lo sentimos, esta página no existe
      </Heading>
      <Link to="/">
        <Button variant="solid" colorScheme={"#ffffff"} background={color}>
          Go Home
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFound404;
