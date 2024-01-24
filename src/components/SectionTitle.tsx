import styled from "styled-components";

export const SectionTitle = styled.h2`
	color: #fff;
	font-size: 32px;
	font-weight: 600;
	line-height: 136%; /* 43.52px */

	margin: 0 auto;
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
		bottom: -20px;
		transform: translateX(-50%);
	}
`