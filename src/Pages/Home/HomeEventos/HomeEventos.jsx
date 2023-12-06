import DescricaoSecao from "../../../Components/DescricaoSecao/DescricaoSecao";
import { StyledSection } from "../styleHomePage";

function HomeEventos() {
  return (
    <StyledSection reverse={true}>
      <div className="div-pai">
        <DescricaoSecao
          title="NOSSOS EVENTOS"
          subTitle="Delicias com sorvete!"
          description="Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente."
        />
      </div>
      <div className="div-pai">
        <img src="assets/eventos-image.jpg"></img>
      </div>
    </StyledSection>
  );
}

export default HomeEventos;
