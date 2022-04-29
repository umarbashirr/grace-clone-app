import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/TopNavbar.module.scss';
import { pages } from '../data/data';
import TransBrandLogo from '../public/assets/images/logo.svg';
import DarkBrandLogo from '../public/assets/images/logodark.jpg';
import { FaBars } from 'react-icons/fa';
import MobileNavigation from './MobileNavigation';

const TopNavbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<header
				className={
					isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header
				}
			>
				<nav className={styles.navbar}>
					<div className={styles.navbar_logo}>
						<Image
							src={isScrolled ? DarkBrandLogo : TransBrandLogo}
							alt='Private Travel Services'
							width={100}
							height={90}
						/>
					</div>
					<button
						className={styles.navbar_toggler}
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						<FaBars />
					</button>
					<ul className={styles.navbar_menu}>
						{pages.map((page) => {
							const { label, path } = page;
							return (
								<Link href={path} key={label}>
									<a className={styles.navbar_link}>{label}</a>
								</Link>
							);
						})}
					</ul>
				</nav>
			</header>
			<MobileNavigation pages={pages} isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};

export default TopNavbar;
