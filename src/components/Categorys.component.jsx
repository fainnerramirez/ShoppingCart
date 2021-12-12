import { Container, Heading } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem.component";

const Categorys = (props) => {
  return (
    <Container maxW="container.xl" p={0}>
      <Heading
        fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        textAlign={{ base: "center", sm: "center", md: "left" }}
        p={10}
      >
        Categorías
      </Heading>
      <CategoryItem />
    </Container>
  );
};

export default Categorys;
