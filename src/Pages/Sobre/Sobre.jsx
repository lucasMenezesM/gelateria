import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";
import SobreContent from "./SobreContent/SobreContent";

const StyledSection = styled.section``;

function Sobre() {
  return (
    <StyledSection>
      <Header />
      <Banner
        cover={true}
        title="A GELATERIA"
        urlIMG="assets/banner-sobre.png"
      />

      <SobreContent />

      <Footer />
    </StyledSection>
  );
}

export default Sobre;
