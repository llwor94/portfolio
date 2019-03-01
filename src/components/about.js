import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Lauren from '../images/lauren.png';

const Wrapper = styled.div`
	max-width: 760px;
	display: flex;
	align-items: center;
	margin: 80px auto;
	img {
		height: 200px;
		width: 200px;
		margin-right: 20px;
		border-radius: 100%;
	}
	h1 {
		color: #373737;
		font-size: 4rem;
	}
`;

const TextContent = styled.div`
	padding-left: 15px;
	font-family: 'Open Sans', sans-serif;
	p {
		font-size: 14px;
	}
`;

const Icons = styled.div`
	display: flex;
	a {
		height: 36px;
		width: 36px;
		line-height: 36px;
		background: #8e8e8e;
		border-radius: 100%;
		color: #fff;
		font-size: 14px;
		text-align: center;
		margin: 0px 5px;
	}
`;

const About = () => (
	<Wrapper id='about'>
		<img src={Lauren} />
		<TextContent>
			<h1>Hi! I'm Lauren</h1>
			<p>I like to work on projects and learn new things.</p>
			<Icons>
				<a href='https://twitter.com/llwor94' target='_blank'>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a href='https://github.com/llwor94' target='_blank'>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href='https://linkedin.com/in/lauren-worthington' target='_blank'>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				
			</Icons>
			<div className="centerContent">
<div className="selfCenter standardWidth">
{/* <TwitterTimelineEmbed sourceType="profile" userId={1934309676} options={{height: 400}} /> */}
</div>
</div>
		</TextContent>
	</Wrapper>
);

export default About;
