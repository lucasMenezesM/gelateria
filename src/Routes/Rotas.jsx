import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Sabores from "../Pages/Sabores/Sabores";
import Sobre from "../Pages/Sobre/Sobre";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/gelateria/" element={<Home />} />
        <Route path="/gelateria/sabores" element={<Sabores />} />
        <Route path="/gelateria/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
