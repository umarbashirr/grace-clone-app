import React from 'react';
import styles from '../styles/MainHero.module.scss';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const MainHero = () => {
	return (
		<div className={styles.hero}>
			<video autoPlay loop muted className={styles.hero_video}>
				<source src='/assets/videos/herovideo.mp4' type='video/mp4' />
			</video>
			<div className={styles.hero_content}>
				<h1>Welcome to Private Travel Services</h1>
				<div className={styles.hero_btn_wrapper}>
					<button className={styles.hero_btn}>
						Call Us{' '}
						<span>
							<FaPhone />
						</span>
					</button>
					<button className={styles.hero_btn}>
						WhatsApp{' '}
						<span>
							<FaWhatsapp />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
