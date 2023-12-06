import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #000000;
  color: white;
  padding: 10px 0;

  .container-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px 0 55px 0;
  }

  img {
    width: 140px;
    ${"" /* margin: 0 auto; */}
  }

  .container-footer div {
    width: 200px;
    margin: 0 25px;
  }

  .div-img {
    display: flex;
    justify-content: center;
  }

  .credits {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .container-footer div {
      width: 100%;
      margin: 10px 0;
      text-align: center;
    }
  }

  @media screen and (max-width: 500px) {
    .container-footer div {
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="container-footer">
        <div className="div-img">
          <img src="assets/logo.png" />
        </div>

        <div className="endereco">
          <h4>ENDEREÇO</h4>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>

        <div className="contato">
          <h4>CONTATO</h4>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>

        <div className="horarios">
          <h4>HORÁRIOS</h4>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>

      <p className="credits">
        Gelateria. Orgulhosamente desenvolvido por "Lucas Menezes"
      </p>
    </StyledFooter>
  );
}

export default Footer;
