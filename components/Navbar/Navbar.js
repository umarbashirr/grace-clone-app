import { useRouter } from 'next/router';
import React from 'react';
import { pages } from '../../data/data';
import Image from 'next/image';
import BrandLogo from '../../assets/images/logodark.jpg';
import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
	const router = useRouter();
	return (
		<header className={styles.topNav}>
			<nav className={styles.navbar}></nav>
		</header>
	);
};

export default Navbar;
