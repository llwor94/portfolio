import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
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
  color: #ffffff;
	padding-right: 7px;
  font-size: 14px;
	font-family: 'Roboto-Mono', monospace;

	&:hover {
		color: #fff;
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

const Header = () => (
	<Wrapper>
		<Nav>
			<StyledLink to='#about'>About</StyledLink>
			<StyledLink to='#projects'>Projects</StyledLink>
		</Nav>
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
	</Wrapper>
);

export default Header;
