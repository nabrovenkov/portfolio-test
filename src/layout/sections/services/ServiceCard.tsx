import { styled } from "styled-components";
import { IconSvg } from "../../../components/icon/IconSvg";
import { FlexWrapper } from "../../../components/FlexWrapper";

type ServiceCardPropsType = {
  name: string
  size: string
  iconId: string
}
export function ServiceCard (props: ServiceCardPropsType) {
  return (
		<ServiceCardStyle>
			<IconSvg iconId={props.iconId} size={props.size} />
			<NameService>{props.name}</NameService>
			<ViewMore>
				<Link>View More</Link>
				<IconSvg iconId='serviceArrow' size='21' />
			</ViewMore>
		</ServiceCardStyle>
	)
}

const ServiceCardStyle = styled.article`
	width: 334px;
	height: 402px;
  margin-bottom: 97px;
  padding: 117px 60px;
	background: #2c2b2b;
	box-shadow: 0px 15px 29px 0px rgba(0, 0, 0, 0.05);
`
const NameService = styled.h3`
	color: #fff;
	font-size: 32px;
	font-weight: 500;
	line-height: 40px;

  margin: 25px 0 30px;
`

const ViewMore = styled.div`
  display: flex;
  align-items: center
`

const Link = styled.a`
	color: #2157f2;
	font-size: 16px;
	line-height: 31.36px;
  margin-right: 13px;
`