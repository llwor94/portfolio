import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 20px 34px;
	display: flex;
	position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2f313d;
  font-size: 14px;
`;

const Header = () => (
	<Wrapper>
		<StyledLink to='/'>Home</StyledLink>
	</Wrapper>
);

export default Header;
