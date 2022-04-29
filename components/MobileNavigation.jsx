import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/MobileNavigation.module.scss';
import DarkLogo from '../public/assets/images/logodark.jpg';

const MobileNavigation = ({ pages, isOpen, setIsOpen }) => {
	const router = useRouter();

	const handleNavigation = (path) => {
		router.push(path);
		setIsOpen(!isOpen);
	};
	return (
		<div className={!isOpen ? styles.mnav : `${styles.mnav} ${styles.active}`}>
			<div className={styles.menu}>
				<div className={styles.menu_logo}>
					<Image
						src={DarkLogo}
						alt='Private Travel Services'
						width={100}
						height={100}
					/>
				</div>
				{pages.map((page) => {
					const { path, label } = page;
					return (
						<button
							className={styles.menu_btn}
							key={label}
							onClick={() => handleNavigation(path)}
						>
							{label}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default MobileNavigation;
