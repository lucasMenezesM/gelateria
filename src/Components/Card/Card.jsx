import styled from "styled-components";

const StyledCard = styled.div`
  ${"" /* border: 1px solid blue; */}
  margin: 30px 20px;
  width: calc((100% / 3) - 40px);
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 40px 20px;
  justify-content: space-between;
  box-shadow: 0 0 10px #99ddc8;
  line-height: 26px;
  transition: all 0.3s;
  ${"" /* z-index: 0; */}

  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 0px 15px black;
  }

  img {
    margin: 0 auto;
    width: 100%;
    object-fit: contain;
    height: 190px;
    ${"" /* border: 1px solid pink; */};
  }

  .card-text h3 {
    font-weight: 800;
    margin: 15px 0;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

function Card(props) {
  return (
    <StyledCard>
      <img src={props.urlIMG} />
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
