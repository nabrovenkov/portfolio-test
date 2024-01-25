import styled from "styled-components";

export const SectionTitle = styled.h2`
	color: #fff;
	font-size: 32px;
	line-height: 136%; /* 43.52px */
	text-align: center;
	padding: 55px 0 80px;
	position: relative;

	&::after {
		content: '';
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #d9d9d9;
		background-image: linear-gradient(180deg, #a6bcfa 0%, #2157f2 100%);
		position: absolute;
		left: 50%;
		bottom: 50px;
		transform: translateX(-50%);
	}
`