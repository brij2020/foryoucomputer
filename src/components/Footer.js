import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/* Melvin Kisten */}
						<a
							rel='noopener noreferrer'
							href='#'
							target='_blank'
							className='melvin-kisten'
						>
							<i className='fas fa-user-circle'></i>My Ecom
						</a>
						Copyright &copy; My Ecom
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
