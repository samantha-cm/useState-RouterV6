//imports
// import { Outlet } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pokemons from "./pages/Pokemons";
import Layout from "./pages/Layout";
//Dummies components

// const Home = () => <h1>Home</h1>;
// const Layout = () => {
//   return (
//     <div>
//       <h1>Layout</h1>
//       <Outlet />
//     </div>
//   );
// };
// const About = () => <h1>About</h1>;
// const Pokemons = () => <h1>Pokemons</h1>;

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/pokemons" element={<Pokemons />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
