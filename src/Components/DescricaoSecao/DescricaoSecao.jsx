import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 10%;

  h2 {
    font-weight: 800;
  }
  h3 {
    padding: 30px 0;
    font-style: italic;
  }
`;

function DescricaoSecao(props) {
  return (
    <StyledDiv>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
      <p>{props.description}</p>
    </StyledDiv>
  );
}

export default DescricaoSecao;
