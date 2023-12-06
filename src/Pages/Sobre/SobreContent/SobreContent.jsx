import styled from "styled-components";

const StyledText = styled.section`
  max-width: 1024px;
  line-height: 20px;
  text-align: center;
  margin: 80px auto;
  padding: 25px;
  h2 {
    margin-top: 35px;
    font-size: 45px;
    font-weight: 800;
  }
  h3 {
    margin: 25px 0 30px 0;
    font-style: italic;
  }
  p {
    margin: 15px 0;
  }
`;

const StyledImages = styled.section`
  display: flex;
  flex-wrap: wrap;
  img {
    width: calc(100% / 2);
    height: auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

function SobreContent() {
  return (
    <div>
      <StyledText>
        <h2>Sobre Nós</h2>
        <h3>Nós simplesmente amamos sorvete!</h3>
        <p>
          Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
          sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e
          gostamos de receber elogios. Estamos operando desde 2009 com as
          melhores matérias-primas para a produção final do sorvete. Vendemos
          tanto para varejo como para atacado.
        </p>
        <p>
          Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
          loja ou levar para sua residência e aproveitar junto com a família.
          Também vendemos para estabelecimentos e criamos eventos como festa de
          aniversário, formaturas e eventos empresariais. Para contratar os
          nossos serviços, basta entrar em contato conosco. Iremos proporcionar
          o melhor atendimento e os melhores produtos para você fazer a sua
          festa mais saborosa, com o melhor sorvete da cidade.
        </p>
      </StyledText>

      <StyledImages>
        <img src="assets/sobre-image.jpg"></img>
        <img src="assets/sorveteria.jpg"></img>
      </StyledImages>
    </div>
  );
}

export default SobreContent;
