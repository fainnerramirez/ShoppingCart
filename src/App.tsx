//Components Page
import Home from "./components/HomeComponent";
import Navbar from "./components/NavbarComponent";
//Chakra UI
import { Container, useColorModeValue } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <Container maxW="full" height="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Navbar brand="SHOPPING CART"/>
      <Home 
        title="The platform that takes you to your" 
        subtitle="Favorite products" 
        description="Find what you like best without leaving home" 
      />
    </Container>
  );
}

export default App;
