import styled from "styled-components";
import React from "react";
import { MainPhoto } from "../image/MainPhoto";

export function MainCard () {
  return (
		<StyledMainCard>
			<MainPhoto />
			<img src='' alt='' />
			<p>I’m Alireza Kavousy nezjad</p>
			<p>
				Draft is a revolutionary mobile app built to help you manage your
				business easily and save your money.
			</p>
			<button>See Project</button>
			<button>Download Resume</button>
		</StyledMainCard>
	)
}

const StyledMainCard = styled.article`
	/* position: absolute; */
	/* background-color: #0000ff58; */
	width: 80%;
	margin: 188px auto 251px;
	border-radius: 70px 5px;
	border: 2px solid rgba(71, 71, 71, 0.3);
	background-color: blue;
	backdrop-filter: blur(10px);
`