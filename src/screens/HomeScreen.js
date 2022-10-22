import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts,getFilter} from '../actions/productActions'
import {
  useParams,useLocation
} from "react-router-dom"

const HomeScreen = ({ match }) => {
	let keyword = match.params.keyword;

 	const location = useLocation();
	const pageNumber = match.params.pageNumber || 1
	
	const dispatch = useDispatch()
	// useSelector is to grab what we want from the state
	const productList = useSelector((state) => state.productList)
	const { loading, error, productCopy, page, pages } = productList

	// make request here upon component load
	useEffect(
		() => {
			// Fire off action to get the products
			const query = new Proxy(new URLSearchParams(location.search),{
						get: (searchParams,prop) => searchParams.get(prop) 
					})
					
			if(query.refid !== null) {
					dispatch(listProducts(query.refid , pageNumber,'productsByCat'))
					dispatch(getFilter(query.refid))
			} else {
					dispatch(listProducts('', pageNumber,'productsByCat'))
					dispatch(getFilter('all'))
			}
			
		
		},

		[dispatch, keyword, pageNumber,location.pathname] // Dependencies, on change they fire off useEffect
	)
	return (
		<>
			<Meta />
			{!keyword ? (
				<ProductCarousel />
			) : (
				<Link className='btn btn-light' to='/'>
					Go Back
				</Link>
			)}
			<h1>Latest Products</h1>
			{/* When loading, display Loading...
            On error, display error
            Else display the products */}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Row>
						{productCopy.map((product) => (
							<Col key={product._id} sm={12} md='6' lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</>
			)}
		</>
	)
}

export default HomeScreen
