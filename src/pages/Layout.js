import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
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
    </>
  );
};

export default Layout;
