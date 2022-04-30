import React from 'react';

const Container = ({ children }) => {
	return (
		<>
			<div className='container'>{children}</div>
			<style jsx>{`
				.container {
					width: 100%;
					maxwidth: 1140px;
					margin: 0 auto;
					padding: 0 30px;
				}
			`}</style>
		</>
	);
};

export default Container;
