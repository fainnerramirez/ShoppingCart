//Chakra UI
import { Container, useColorModeValue } from "@chakra-ui/react";
//React router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTE } from "./utils/Route";
import * as COLOR from "./utils/Colors";
//Pages
import HomePage from "./pages/Home.page";
import ProductsPage from "./pages/Products.page";
//Components Page
import Layout from "./components/Layout.component";
import NotFound404 from "./components/NotFound.component";

const App: React.FC = () => {
  const bg = useColorModeValue("gray.50", COLOR.dark);

  return (
    <Router>
      <Container maxW="100%" bg={bg} p={0}>
        <Layout>
          <Switch>
            <Route exact path={ROUTE.HOME} component={HomePage} />
            <Route exact path={ROUTE.PRODUCTS} component={ProductsPage} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </Layout>
      </Container>
    </Router>
  );
};

export default App;
