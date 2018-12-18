import React from 'react';
import styled from 'styled-components';

import Lauren from '../images/lauren.png';

const Wrapper = styled.div`
	max-width: 760px;

	margin: 80px auto;
	img {
		height: 200px;
		width: 200px;
		margin-right: 20px;
		border-radius: 100%;
		float: left;
	}
`;

const TextContent = styled.div`
	padding-left: 15px;
	font-family: 'Open Sans', sans-serif;
	p {
		font-size: 14px;
	}
`;

const About = () => (
	<Wrapper id='about'>
		<img src={Lauren} />
		<TextContent>
			<h1>About Lauren</h1>
			<p>
				Lauren's coding curiousity was first sparked during her time at the University of
				Washington. In the last few semesters of her undergraduate studies in Philsophy,
				Lauren took an intro to computer programming series where she learned Java and fell
				in love.
			</p>
			<p>
				After graduating, Lauren worked full time at a restauarant in Seattle, saving up
				money and taking a few programming courses online on the side so she could pursue
				studying programming full-time. In June of 2018, she started at Lambda School,
				settling into the full-stack web development course, unsure of where it would take
				her.
			</p>
			<p>
				Lambda School ended up being the best decision of her life- quickly picking up the
				basics of HTML, CSS, and JavaScript, and diving into the complexities of React,
				Nodejs, Express, SQL, and more. She was hired to be the Section Lead for a new
				cohort, and is currently holding this position, helping to guide students through
				the first 3 months of the program, while continuing to expand her knowledge in web
				development and build projects on the side.
			</p>
			<p>
				Lauren is currently finishing out her time at Lambda School, and searching for her
				place within the professional coding community. With her love of working with data,
				she is passionate for backend development, but also loves building client side
				applications.
			</p>
		</TextContent>
	</Wrapper>
);

export default About;
