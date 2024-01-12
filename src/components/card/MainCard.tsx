import styled from "styled-components";
import React from "react";

export function MainCard () {
  return (
    <StyledMainCard>
      ,..m
    </StyledMainCard>
  );
}

const StyledMainCard = styled.article`
	/* position: absolute; */
	/* background-color: #0000ff58; */
	width: 80%;
	margin: 188px auto 251px;
	border-radius: 70px 5px;
	border: 2px solid rgba(71, 71, 71, 0.3);
	background-color: linear-gradient(
		147deg,
		rgba(57, 57, 57, 0.5) -6.76%,
		rgba(0, 66, 255, 0.05) 102.96%
	);
	backdrop-filter: blur(10px);
`