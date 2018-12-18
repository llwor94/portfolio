import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import Background from '../images/code1.png';

const Wrapper = styled.div`
	position: relative;
	background: #f9f9fb;
	height: 100vh;
	border-bottom: 1px solid #e5e7e9;
	margin: 0 0 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const BackgroundImage = styled.div`
	background-position: center;
	background-size: cover;
	position: absolute;
	opacity: .25;
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
	max-width: 760px;
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
		font-size: 80px;
		font-family: 'Open Sans', sans-serif;
	}
	p {
		font-family: 'Roboto-Mono', monospace;
	}
`;

const Jumbotron = () => (
	<Wrapper>
		<BackgroundImage style={{ backgroundImage: `url(${Background})` }} />
		<Content>
			<Inner>
				<h1>Lauren Worthington</h1>
				<p>Full Stack Web Developer || Seattle, WA</p>
				<a href='#about'>
					<FontAwesomeIcon icon={faArrowCircleDown} style={{ color: 'black' }} />
				</a>
			</Inner>
		</Content>
	</Wrapper>
);

export default Jumbotron;
