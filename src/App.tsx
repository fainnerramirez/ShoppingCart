//Components Page
import Home from "./components/HomeComponent";
//Chakra UI
import { Container } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <Container maxW="full">
      <Home 
        title="the platform that takes you to your" 
        subtitle="favorite products" 
        description="find what you like best without leaving home" 
      />
    </Container>
  );
}

export default App;
