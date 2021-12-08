import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about"> About</Link>
          <br />
          <Link to="/pokemons"> Pokemons</Link>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
