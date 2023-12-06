import DescricaoSecao from "../../../Components/DescricaoSecao/DescricaoSecao";
import { StyledSection } from "../styleHomePage";

function HomeSobre() {
  return (
    <StyledSection>
      <div className="div-pai">
        <img src="assets/sobre-image.jpg" alt="Banner Sobre"></img>
      </div>
      <div className="div-pai">
        <DescricaoSecao
          title="SOBRE NÓS"
          subTitle="Alegria em cada casquinha!"
          description="Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade."
        />
      </div>
    </StyledSection>
  );
}

export default HomeSobre;
