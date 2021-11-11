import Navbar from './NavbarComponent';
import Footer from './FooterComponent';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar brand="SHOPPING CART"/>
      {children}
      {/*<Footer footer="Fainner Ramirez | Carlos Borrego" />*/}
    </>
  );
};

export default Layout;