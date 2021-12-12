import Navbar from "./Navbar.component";
import Footer from "./Footer.component";

const Layout = ({ children }) => {
  return (
    <span>
      <Navbar brand="SHOPPING CART" />
      {children}
      <Footer />
    </span>
  );
};

export default Layout;
