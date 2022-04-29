import React from 'react';
import { TopNavbar, Footer } from '.';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div>
			<TopNavbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
