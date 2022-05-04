import Image from 'next/image';
import React from 'react';
import styles from '../styles/Testimonial.module.scss';
import Container from './ui/Container';

const Testimonials = () => {
	const [index, setIndex] = React.useState(0);

	function changeIndex() {
		setInterval(() => {
			if (index > slides.length - 1) {
				setIndex(0);
			} else if (index < 0) {
				setIndex(slides.length - 1);
			} else {
				setIndex((prev) => prev + 1);
			}
		}, 2000);
	}

	const slides = [
		{
			id: 1,
			image: '/assets/images/user_image.jpg',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum quaerat sit ea commodi in, ullam optio repudiandae sequi accusantium reprehenderit, voluptas repellat laborum! Nisi praesentium labore quae a ipsa!',
			user_name: 'John Doe',
		},
		{
			id: 2,
			image: '/assets/images/user_image.jpg',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum quaerat sit ea commodi in, ullam optio repudiandae sequi accusantium reprehenderit, voluptas repellat laborum! Nisi praesentium labore quae a ipsa!',
			user_name: 'Marry Rose',
		},
		{
			id: 3,
			image: '/assets/images/user_image.jpg',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum quaerat sit ea commodi in, ullam optio repudiandae sequi accusantium reprehenderit, voluptas repellat laborum! Nisi praesentium labore quae a ipsa!',
			user_name: 'Charlies Davies',
		},
	];

	React.useEffect(() => {
		changeIndex();
	}, [index]);

	const { image, desc, user_name } = slides[index];

	return (
		<div className={styles['testimonial']}>
			<Container>
				<div className={styles.header}>
					<h2 className={styles.title}>Client Review</h2>
					<p className={styles.subtitle}>satisfaction, everytime.</p>
				</div>
				<div className={styles['testimonial-wrapper']}>
					<article className={styles.review}>
						<div className={styles.review_img}>
							<Image src={image} alt='John Doe' width={100} height={100} />
							<p className={styles.review_desc}>{desc}</p>
							<p className={styles.review_user}>{user_name}</p>
						</div>
					</article>
				</div>
			</Container>
		</div>
	);
};

export default Testimonials;
