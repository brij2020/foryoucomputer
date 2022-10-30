import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import PaginationComponent from '../components/Pagination'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const HistoryScreen = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null);
	const [ perPage, setPerpage ] = useState(10);
	const [pageno, setPageNumber] = useState(1);
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(listMyOrders())
	},[])
	// useSelector is to grab what we want from the state
	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails

	// Make sure user is logged in to access this page
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	// Get success value from userUpdateProfileReducer
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
	const { success } = userUpdateProfile

	// To get my list of orders
	const orderListMy = useSelector((state) => state.orderListMy);
	
	const { loading: loadingOrders, error: errorOrders, orders, page=0 } = orderListMy
	
	const handlePagination = (_page) => {
		
		setPageNumber(_page)
		dispatch(listMyOrders({ perpage:perPage , pageno:_page}))
	}
	
	return (<>
		<Col md={9}>
				<h2>My orders</h2>
				{loadingOrders ? (
					<Loader />
				) : errorOrders ? (
					<Message variant='danger'>{errorOrders}</Message>
				) : (
					<Table bordered hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>#</th>
								<th>ID</th>
								<th>Date</th>
								<th>Total</th>
								<th>Paid</th>
								<th>Delivered</th>
								<th>Info</th>
							</tr>
						</thead>
						<tbody>
							{Array.isArray(orders) && orders.map((order, i) => (
								<tr key={order._id}>
								<td>{ (pageno -1) * perPage + (i+1)}</td>
									<td>{order._id}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>R{order.totalPrice}</td>
									<td>
										{order.isPaid ? (
											order.paidAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</td>
									<td>
										{order.isDeliverd ? (
											order.deliveredAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</td>
									<td>
										<LinkContainer to={`/order/${order._id}`}>
											<Button className='btn-sm' variant='light'>
												Details
											</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Col>
			<PaginationComponent
				perpage = { page }
				pageno = { pageno }
				onClick= { handlePagination }
			/>
		

		</>)
}
export default HistoryScreen;