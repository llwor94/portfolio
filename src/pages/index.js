import React from 'react';
import { Link } from 'gatsby';
import Jumbotron from '../components/jumbotron';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import About from '../components/about';
import Projects from '../components/projects';
const IndexPage = () => (
	<Layout>
		<SEO title='Home' keywords={[ 'developer', 'web developer', 'react', 'fullstack', 'fullstack developer',  'web']} />
		<Jumbotron />
		{/* <About /> */}
	</Layout>
);

export default IndexPage;
