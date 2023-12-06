import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  ${(props) =>
    props.reverse === true ? "flex-wrap: wrap-reverse;" : "flex-wrap: wrap;"}

  .div-pai {
    width: 50%;
  }

  @media screen and (max-width: 968px) {
    .div-pai {
      width: 100%;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;
