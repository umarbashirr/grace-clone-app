import React from 'react';
import Section from './ui/Section';
import Container from './ui/Container';
import styles from '../styles/HomeAbout.module.scss';
import Image from 'next/image';
import homeAboutImage from '../public/assets/images/isometric-ipad-white.png';

const HomeAbout = () => {
	return (
		<Section>
			<Container>
				<h2 className={styles.title}>Welcome to Private Travel Services</h2>
				<p className={styles.tagline}>were very happy to see you.</p>
				<div className={styles.row}>
					<div className={styles.col}>
						<article>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
								minima, cupiditate ex ducimus perspiciatis quod at voluptate
								aut, ipsum commodi assumenda laudantium, impedit eligendi minus
								doloribus? Ducimus error dolorem iste!
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
								minima, cupiditate ex ducimus perspiciatis quod at voluptate
								aut, ipsum commodi assumenda laudantium, impedit eligendi minus
								doloribus? Ducimus error dolorem iste!
							</p>
							<button type='button'>Get in Touch</button>
						</article>
					</div>
					<div className={styles.col}>
						<div>
							<Image src={homeAboutImage} alt='About Image' />
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default HomeAbout;
