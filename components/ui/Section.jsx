import React from 'react';

const Section = ({ children }) => {
	return (
		<>
			<section>{children}</section>
			<style jsx>{`
				section {
					margin: 100px 0;
				}

				@media screen and (max-width: 768px) {
					section {
						margin: 50px 0;
					}
				}
			`}</style>
		</>
	);
};

export default Section;
