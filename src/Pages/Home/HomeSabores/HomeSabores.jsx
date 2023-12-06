import DescricaoSecao from "../../../Components/DescricaoSecao/DescricaoSecao";

import { StyledSection } from "../styleHomePage";

function HomeSabores() {
  return (
    <StyledSection className="reverse">
      <div className="div-pai">
        <img src="assets/banner-sabores.jpg" alt="Imagem Secao Sabores"></img>
      </div>

      <div className="div-pai descricao">
        <DescricaoSecao
          title="NOSSOS SABORES"
          subTitle="Novos e deliciosos!"
          description="Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!"
        />
      </div>
    </StyledSection>
  );
}

export default HomeSabores;
