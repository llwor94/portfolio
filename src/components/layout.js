import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
	<div>
		<Helmet>
			<link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' />
			<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.1/css/all.css' />
		</Helmet>

		<div>
			<Header />
			{children}
		</div>
	</div>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
