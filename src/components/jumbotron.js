import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import Background from '../images/code1.png';
import Particles from 'react-particles-js';
import { Transition } from 'react-transition-group';

const Wrapper = styled.div`
	position: relative;

	height: 100vh;
	background: #0f2027; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to top,
		#2c5364,
		#203a43,
		#0f2027
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to top,
		#2c5364,
		#203a43,
		#0f2027
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	border-bottom: 1px solid #e5e7e9;
	margin: 0 0 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const BackgroundImage = styled(Particles)`
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
		color: #ffffff;
	}
	p {
		font-family: 'Roboto-Mono', monospace;
		color: #ffffff;
	}
`;

const Jumbotron = () => {
	const pageRef = React.createRef();
	const scroll = ref => {
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<Fragment>
			<Wrapper>
				<Particles
					width={'100vw'}
					height={'100vh'}
					style={{ position: 'absolute', top: 0, left: 0 }}
					params={{
						particles: {
							number: {
								value: 50,
							},
							size: {
								value: 3,
							},
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: 'repulse',
								},
							},
						},
					}}
				/>
				<Content>
					<Inner>
						<h1>Lauren Worthington</h1>
						<p>Full Stack Web Developer || Seattle, WA</p>
						<div>
							<FontAwesomeIcon
								icon={faArrowCircleDown}
								style={{ color: '#ffffff', cursor: 'pointer' }}
								onClick={() => scroll(pageRef)}
							/>
						</div>
					</Inner>
				</Content>
			</Wrapper>
			<div ref={pageRef} />
		</Fragment>
	);
};

export default Jumbotron;
