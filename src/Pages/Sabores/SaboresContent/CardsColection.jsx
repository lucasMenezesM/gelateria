import Card from "../../../Components/Card/Card";
import styled from "styled-components";

const CardsSection = styled.section`
  margin: 5px auto;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function CardsColection() {
  return (
    <CardsSection>
      <Card
        title="Sorvete de Oreo"
        description="Delicioso sorvete sabor Oreo. Uma explosão de sabor."
        urlIMG="assets/sabor-oreo.png"
      />

      <Card
        title="Sorvete Pistache"
        description="Cremoso sorvete sabor pistache com pedacinhos de semente."
        urlIMG="assets/sabor-pistache.png"
      />
      <Card
        title="Sorvete Cookies & Avelã"
        description="O nosso melhor sorvete. Você vai adorar o sabor."
        urlIMG="assets/sabor-cookies-avela.png"
      />
      <Card
        title="Sorvete de Kiwi"
        description="Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C."
        urlIMG="assets/sorbet-kiwi.png"
      />
      <Card
        title="Sorvete de Morango"
        description="Sorvete de morango gourmet. Tradicional e saboroso."
        urlIMG="assets/sorbet-morango.png"
      />
      <Card
        title="Sorvete de Limão Siciliano"
        description="O incrivel sorvete gourmet de limão siciliano vai te encantar."
        urlIMG="assets/sorbet-limao.png"
      />
    </CardsSection>
  );
}

export default CardsColection;
