import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  outline: 1px solid red;
  margin: 0 auto;
  padding: 0 3px;

  @media screen and (max-width: 1200px) {
    padding: 0 15px;
  }
`