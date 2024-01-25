import { styled } from 'styled-components'

export function ProjectMenu(props: { itemsMenuArr: Array<string> }) {
	return (
		<StyledProjectMenu>
			<ul>
				{props.itemsMenuArr.map(item => {
					return (
						<ProjectButton>
							<a href='#'>{item}</a>
						</ProjectButton>
					)
				})}
			</ul>
		</StyledProjectMenu>
	)
}

const StyledProjectMenu = styled.nav`
	max-width: 1160px;
  width: 100%;
	padding: 4px;
  margin: 58px auto 0;
	/* margin-right: 34px; */
	ul {
		display: flex;
		gap: 58px;
	}
`

const ProjectButton = styled.div`
	width: 160px;
	height: 42px;

	border-radius: 67px;
	border: 3px solid #4c546c;

	position: relative;

	& > a {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		color: #fff;
		font-size: 20px;
		line-height: 136%; /* 27.2px */
	}

	&:hover {
		background-color: #24335c;
		border-color: #24335c;
	}
`