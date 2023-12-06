import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import CardsColection from "./SaboresContent/CardsColection";
import styled from "styled-components";

const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 50px;
`;

function Sabores() {
  return (
    <section>
      <Header />

      <Banner
        cover={true}
        urlIMG="assets/banner-sabores.jpg"
        title="NOSSOS SABORES"
      />

      <StyledTitle>SABORES DE SORVETE</StyledTitle>

      <CardsColection />

      <Footer />
    </section>
  );
}

export default Sabores;
