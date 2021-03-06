import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {LinkedinIcon, GithubIcon, TwitterIcon} from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
	padding: 20px 34px;
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	@media (max-width: 500px) {
		padding: 20px 10px;
	}
`;

const Nav = styled.div`display: flex;`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
	padding-right: 7px;
  font-size: 14px;
	font-family: 'Roboto-Mono', monospace;

	&:hover {
		color: black;
	}
`;

const Icons = styled.div`
	display: flex;
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 36px;
		width: 36px;
		line-height: 36px;
		background: #fff;
		border-radius: 100%;
		svg {
			fill: #535358;
		height: 20px;
		width: 20px
		}
		
		
		margin: 0px 5px;
	}
`;

const Header = () => (
	<Wrapper>
		<Nav>
			{/* <StyledLink to='#about'>About</StyledLink>
			<StyledLink to='#projects'>Projects</StyledLink> */}
		</Nav>
		<Icons>
			<a href='https://twitter.com/llwor94' target='_blank'>
				<TwitterIcon />
			</a>
			<a href='https://github.com/llwor94' target='_blank'>
				<GithubIcon />
			</a>
			<a href='https://linkedin.com/in/lauren-worthington' target='_blank'>
				<LinkedinIcon />
			</a>
		</Icons>
	</Wrapper>
);

export default Header;
