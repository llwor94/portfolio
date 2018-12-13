import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import header from '../components/header';

import Background from '../images/code.png';
import Lauren from '../images/lauren.png';
import Header from '../components/header';

const Wrapper = styled.div`
	position: relative;
	background: #f9f9fb;
	border-bottom: 1px solid #e5e7e9;
	margin: 0 0 60px;
	position: relative;
`;
const BackgroundImage = styled.div`
	background-position: center;
	background-size: cover;
	position: absolute;
	opacity: .15;
	top: 0;
	right: 0;

	bottom: 0;
	left: 0;
`;

const Content = styled.div`
	padding: 60px 35px 30px;
	opacity: 1;
	position: relative;
`;
const Inner = styled.div`
	max-width: 720px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 1;
	img {
		height: 130px;
		width: 130px;
		border-radius: 100%;
		margin-bottom: 60px;
	}
	h1 {
		font-size: 40px;
		font-family: 'Open Sans', sans-serif;
	}
	p {
		font-family: 'Roboto-Mono', monospace;
	}
`;
const Icons = styled.div`
	margin: 0 0 30px;
	display: flex;
	a {
		height: 36px;
		width: 36px;
		line-height: 36px;
		background: #fff;
		border-radius: 100%;
		color: #535358;
		font-size: 14px;
		text-align: center;
		margin: 3px 5px;
	}
`;

const IndexPage = () => (
	<Layout>
		<SEO title='Home' keywords={[ 'gatsby', 'application', 'react' ]} />
		<Wrapper>
			<Header />
			<BackgroundImage style={{ backgroundImage: `url(${Background})` }} />
			<Content>
				<Inner>
					<img src={Lauren} />
					<h1>Lauren Worthington</h1>
					<p>Full Stack Web Developer</p>
					<Icons>
						<a href='https://twitter.com/llwor94' target='_blank'>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href='https://github.com/llwor94' target='_blank'>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</Icons>
				</Inner>
			</Content>
		</Wrapper>
	</Layout>
);

export default IndexPage;
