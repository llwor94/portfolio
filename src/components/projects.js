import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	max-width: 760px;

	margin: 80px auto;
`;

const ProjectWrapper = styled.div`
	padding: 0 20px;
	font-family: 'Open Sans', sans-serif;
	a {
		text-decoration: none;
		color: gray;
		padding-left: 5px;
		font-size: 16px;
	}
	p {
		font-size: 16px;
	}
`;

const projectList = [
	{
		title: 'Eastside Swim School',
		link: 'https://www.eastsideswimschool.com/',
		repo: 'https://github.com/cooltable/eastside-swim-school',
		description: `Eastside Swim school is a static site built with Gatsby, Graphql, and Material UI. It is deployed through Netlify and utilizes Netifly's CMS service.`,
	},
	{
		title: 'Study App API',
		link: 'https://lambda-study-app.herokuapp.com/',
		repo: 'https://github.com/llwor94/study-app-api',
		description: `The study app API was written by Lauren as a section lead, for students in the cohort to use to build a react front-end project over winter break. It was built using Express with Nodejs, and Joi for schema validation. It is hosted through Heroku and uses the free tier of Postgres.`,
	},
];

const Projects = () => (
	<Wrapper id='projects'>
		<h1>Lauren's Projects</h1>
		{projectList.map(project => {
			return (
				<ProjectWrapper>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<a href={project.link}>Live Site</a> &bull;
					<a href={project.repo}>Project Repository</a>
					<hr />
				</ProjectWrapper>
			);
		})}
	</Wrapper>
);

export default Projects;
