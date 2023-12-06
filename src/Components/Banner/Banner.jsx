import styled from "styled-components";

function Banner(props) {
  const StyledBanner = styled.div`
    display: flex;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    background-color: #f9db79;
    background-image: url(${props.urlIMG});
    height: 600px;
    background-repeat: no-repeat;
    background-position: center;
    ${() => props.cover == true && "background-size: cover;"}

    h1 {
      text-align: center;
      font-size: 75px;
      color: white;
      text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 425px) {
      h1 {
        font-size: 45px;
      }
    }
  `;

  return (
    <StyledBanner>
      <h1>{props.title}</h1>
    </StyledBanner>
  );
}

export default Banner;
