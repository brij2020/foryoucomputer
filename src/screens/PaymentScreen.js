import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
	// useSelector is to grab the cart from the state
	const cart = useSelector((state) => state.cart)
	const { shippingAddress } = cart

	if (!shippingAddress) {
		history.push('/shipping')
	}

	// Default paymentMethod is PayPal but can be changed
	const [paymentMethod, setPaymentMethod] = useState('Paytm')
console.log('paytm method', paymentMethod)
	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(savePaymentMethod(paymentMethod))
		history.push('/placeorder')
	}

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as='legend'>Select Method</Form.Label>
					<Col>
						{/* Payment methods
                    Add Form.Check with new payment method */}
						<Form.Check
							type='radio'
							label='Paytm'
							id='Paytm'
							name='paymentMethod'
							value='Paytm'
							checked={ paymentMethod === 'Paytm'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
						<Form.Check
							type='radio'
							label='Cash on Delivery'
							id='COD'
							name='paymentMethod'
							value='COD'
							checked={ paymentMethod === 'COD'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
					</Col>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	)
}

export default PaymentScreen
