import styled from "styled-components";
import React from "react";
import { MainPhoto } from "../../../components/image/MainPhoto";
import { FlexWrapper } from "../../../components/FlexWrapper";

export function Main () {
  return (
		<FlexWrapper justify={'space-around'}>
			<StyledMain>
				<MainPhoto />
				<span>I’m Alireza Kavousy nezjad</span>
				<h1>
					Draft is a revolutionary mobile app built to help you manage your
					business easily and save your money.
				</h1>
				<button>See Project</button>
				<button>Download Resume</button>
			</StyledMain>
		</FlexWrapper>
	)
}

const StyledMain = styled.article`
	width: 80%;
	margin: 188px auto 251px;
	border-radius: 70px 5px;
	border: 2px solid rgba(71, 71, 71, 0.3);
	background-color: blue;
	backdrop-filter: blur(10px);
`