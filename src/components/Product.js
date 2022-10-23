import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FaRupeeSign } from "react-icons/fa";
import Rating from './Rating'

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
		<i className={`fa fa-heart make-wish-list`} aria-hidden="true" ></i>
			<Link to={`/product/${product._id}`}>
				{/* Product image */}

				<Card.Img src={product.image} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/product/${product._id}`}>
					{/* Product name */}
					<Card.Title as='div'>
						<strong>{product.title}</strong>
					</Card.Title>
				</Link>
				<Card.Text as='div'>
					{/* Product rating */}
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>
				{/* Product price */}

				
				<Card.Text as='h3'>
				<FaRupeeSign /> {product.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product
