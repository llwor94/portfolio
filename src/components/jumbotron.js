import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import Background from '../images/code1.png';
import Particles from 'react-particles-js';
import Working from '../images/work';
import { Transition } from 'react-transition-group';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const JumboWrapper = styled.div`
	position: relative;
	padding: 10px;
	max-height: 100vh;
	background-color: #e0e0e0;
	background-image: url("https://www.transparenttextures.com/patterns/black-thread-light.png");
	/* background: #0f2027;  */
	/* fallback for old browsers */
	/* background: -webkit-linear-gradient(
		to top,
		#2c5364,
		#203a43,
		#0f2027
	);  */
	/* Chrome 10-25, Safari 5.1-6 */
	/* background: linear-gradient(
		to top,
		#2c5364,
		#203a43,
		#0f2027
	);  */
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	/* 
	border-bottom: 1px solid #e5e7e9; */
	margin: 0 0 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 100px;
	/* .inner {
		display: flex;
		justify-content: center;
	} */
	/* align-items: center; */
	.img {
		display: flex;
		margin: 0 auto;
		max-width: 1400px; 
		align-items: center;
		justify-content: space-between;

		@media(max-width: 700px) {
			flex-direction: column;
		}
	}
	svg {
		width: 700px;
		max-width: 70%;
		opacity: .7;
		/* margin-bottom: 10px; */
		margin-right: 10px;
	}
	.text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50%;
		/* justify-content: center; */
	}
	p {
		font-family: 'Roboto-Mono', monospace;
		/* color: #ffffff; */
		color: #373737;
		margin-bottom: 5px;
	}
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
		font-size: 98px;
		font-family: 'Open Sans', sans-serif;
		/* color: #ffffff; */
		text-align: center;
		padding-top: 15px;
		color: #616161;
		@media (max-width: 500px) {
			font-size: 65px;
		}
	}
`;

const Icons = styled.div`
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
		margin: 0px 5px;
	}
`;

const Jumbotron = () => {
	const pageRef = React.createRef();
	const scroll = ref => {
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<Fragment>
			<JumboWrapper>
				{/* <Particles
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
				/> */}
				<Content>
					<Inner>
						<h1>Hi! I'm Lauren.</h1>
					</Inner>
				</Content>
				<div className='inner'>
					<div className='img'>
						<div className='text'>
							<p>I'm a fullstack web developer.</p>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<p style={{ padding: 0, margin: '0 5px' }}>My Projects</p>
								<FontAwesomeIcon
									icon={faArrowCircleDown}
									style={{ cursor: 'pointer' }}
									onClick={() => scroll(pageRef)}
								/>
							</div>
						</div>
						<Working />
					</div>
				</div>
			</JumboWrapper>
			<div ref={pageRef} />
		</Fragment>
	);
};

export default Jumbotron;
