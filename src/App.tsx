//Chakra UI
import { Container, useColorModeValue } from "@chakra-ui/react";
//React router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages
import HomePage from "./pages/Home.page";
import ProductsPage from "./pages/Products.page";
import ProdusctsDetailsPage from "./pages/ProductsDetails.page";
//Components Page
import Layout from "./components/Layout.component";
import NotFound404 from "./components/NotFound.component";
//const
import { ROUTE } from "./utils/Route";
import CartPage from "./pages/Cart.page";

const App: React.FC = () => {
  return (
    <Router>
      <Container maxW="100%" p={0}>
        <Layout>
          <Switch>
            <Route exact path={ROUTE.HOME} component={HomePage} />
            <Route exact path={ROUTE.PRODUCTS} component={ProductsPage} />
            <Route
              exact
              path={ROUTE.PRODUCT_DETAILS}
              component={ProdusctsDetailsPage}
            />
            <Route exact path={ROUTE.CART} component={CartPage} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </Layout>
      </Container>
    </Router>
  );
};

export default App;
