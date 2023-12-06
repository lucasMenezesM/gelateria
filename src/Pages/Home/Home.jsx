import Banner from "../../Components/Banner/Banner";
import HomeSabores from "./HomeSabores/HomeSabores";
import HomeEventos from "./HomeEventos/HomeEventos";
import HomeSobre from "./HomeSobre/HomeSobre";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner
        title="SORVETE ARTESANAL"
        urlIMG="assets/banner-home.png"
        altIMG="Home Banner"
      />
      <HomeSabores />
      <HomeEventos />
      <HomeSobre />
      <Footer />
    </div>
  );
}

export default Home;
