//Components Page
import Home from "./components/HomeComponent";
import Layout from "./components/LayoutComponent";
import Products from "./components/ProductsComponent";
import NotFound404 from "./components/NotFoundComponent";
//Chakra UI
import { Container, useColorModeValue } from "@chakra-ui/react";
//React router dom
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ROUTE } from "./const/Route";
import * as COLOR from "./const/Colors";

const App: React.FC = () => {

  const bg = useColorModeValue('gray.50', COLOR.dark);

  return (
    <Router>
      <Container maxW="full" h="100vh" bg={bg}>
        <Layout>
          <Switch>
            <Route exact path={ROUTE.HOME} >
              <Home 
                title="La plataforma que tiene tus productos favoritos" 
                subtitle="sin salir de casa" 
                description="¡Consígue lo que más te gusta en un sólo lugar!" />
            </Route>
            <Route exact path={ROUTE.PRODUCTS} component={Products} />
            <Route path="*" component={ NotFound404 } />
          </Switch>
        </Layout>
      </Container>
    </Router>
  );
}

export default App;
