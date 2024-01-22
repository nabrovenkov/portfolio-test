import styled from "styled-components";
import React from "react";
import { MainPhoto } from "../../../components/image/MainPhoto";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleName } from "../../../components/TitleName";
import { Button } from "../../../components/Button";
import { IconSvg } from "../../../components/icon/IconSvg";

export function Main () {
  return (
		<StyledMain>
			<FlexWrapper  wrap='wrap'>
				<MainPhoto />
				<Wrapper>
					<TitleName />
					<Description>
						Draft is a revolutionary mobile app built to help you manage your
						business easily and save your money.
					</Description>
					<div>
						<Button>
							<ArrowWrapper>
								See Project
								<IconSvg iconId="buttonArrow"/>
							</ArrowWrapper>
						</Button>
						<Link>Download Resume</Link>
					</div>
				</Wrapper>
			</FlexWrapper>
		</StyledMain>
	)
}

const StyledMain = styled.main`
	margin-top: 188px;
	max-width: 1158px;
	max-height: 507px; 
	width: 100%;
	height: 100%;
	margin: 0 auto;

	border-radius: 200px 0px;
	border: 2px solid rgba(71, 71, 71, 0.3);
	background-color: linear-gradient(
		147deg,
		rgba(57, 57, 57, 0.5) -6.76%,
		rgba(0, 66, 255, 0.05) 102.96%
	);
	backdrop-filter: blur(10px);

	position: absolute;
	top: 188px;
	left: 0;
	bottom: 0;
	right: 0;

`
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const Description = styled.h1`
	color: #fff;
	font-size: 20px;
	font-weight: 400;
	line-height: 150%;
	width: 375px;

	margin-top: 20px;
	margin-bottom: 42px;
`

const Link = styled.a`
	margin-left: 32px;

	color: #6c92ff;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 150%; /* 24px */
`
const ArrowWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 36px;
	/* position: absolute; */
/* 	
	top: 25%;
	right: 37px; */
	
`