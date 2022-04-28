import React from 'react';
import { pages } from '../../data/data';
import Image from 'next/image';
import BrandLogo from '../../assets/images/logo.png';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TopNavbar = () => {
	return (
		<Navbar bg='dark' expand='lg' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>
					<Image src={BrandLogo} alt='' width={100} height={100} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						{pages.map((page) => {
							const { label, path } = page;
							return (
								<Link href={path} passHref key={label}>
									<Nav.Link as='a'>{label}</Nav.Link>
								</Link>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopNavbar;
