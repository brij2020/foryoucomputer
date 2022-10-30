import axios from 'axios'
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_CREATE_REVIEW_REQUEST,
	PRODUCT_CREATE_REVIEW_SUCCESS,
	PRODUCT_CREATE_REVIEW_FAIL,
	PRODUCT_TOP_REQUEST,
	PRODUCT_TOP_SUCCESS,
	PRODUCT_TOP_FAIL,
	FILTER_REQUEST,
	FILTER_REQUEST_SUCCESS,
	FILTER_REQUEST_FAIL
} from '../constants/productConstants'
import Axios from "../AxiosInstance"

//add and remove wish list
export const addToWishList = ({ productId, userId, isWishMade}) => async (dispatch, getState) => {
	try {
		let data = getState()['productList']['products'];
		let productsResponse =  {
			message: "products listed ",
			status: true,
			products:[]
		}
		const makeWishResposnse = await Axios.post('/wishes/make', {
			product:`${productId}`,
			user:`${userId}`
		});
		const _d_products = data.map(pro =>  { 
			return pro._id === productId ? Object.assign({},pro,{isWishListed: !isWishMade}):pro
		})
		productsResponse['products'] = _d_products
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: productsResponse,
		})
	} catch(e) {
		console.log(`Error happened`)
	}
	
	

	
	// console.log('api response', dataResposnse);

}

// Actions to get all products
export const listProducts = (keyword = '', pageNumber = '',productsByCat='') => async (
	dispatch
) => {
	let myWishListMap = new Map();
	try {

		if(typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
			if(localStorage.getItem('userInfo')) {
				let userWishList = {}
				
				try {
					let { user_token:{ user_id } = {user_id: ''}} = JSON.parse(localStorage.getItem('userInfo'));
					if(typeof user_id !== 'undefined' && user_id !== '') {
						userWishList = await Axios.post(`wishes/list`,{ "user": user_id });
						if( userWishList && typeof userWishList.data !== 'undefined' && userWishList.data.status) {
							userWishList = userWishList.data.wishList;
							userWishList.map( wish => { myWishListMap.set(`${wish.product}`, wish.product)})
						} else {
							console.error(`Error in fetching wish list`);
						}
					}
				} catch(e) {
					console.log(`Failed in getting `)
				}
			}
		}
	
		dispatch({ type: PRODUCT_LIST_REQUEST })
		// Make request to get all products
		let response = ''
		if(productsByCat !== "") {
			response = await Axios.get(`/products?parentCategory=${keyword}`) 
		} else {
			response = await Axios.get(`/products?keyword=${keyword}`)
		}
		const { data } = response;
		if(data.status) {
			let products = data.products.map( product => {
				if(myWishListMap.has(product?._id)) {
					product = Object.assign({}, product, {isWishListed: true })
				} else {
					product = Object.assign({}, product, {isWishListed: false })

				}
				return product
			})
		
			data['products'] = products
			dispatch({
				type: PRODUCT_LIST_SUCCESS,
				payload: data,
			})	
		} else {
			dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:{
				status: false,
				message: 'please try again'
			}
				// Send a custom error message
				// Else send a generic error message

			})
		}

		
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

// Actions to get all filter
export const getFilter = (subCategory = '', pageNumber = '') => async (
	dispatch
) => {
	try {
		dispatch({ type: FILTER_REQUEST })
		// Make request to get all products
		const { data } = await Axios.get(`/api/filter-by-category?id=${subCategory}`)
		console.log('data', data)

		dispatch({
			type: FILTER_REQUEST_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: FILTER_REQUEST_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
// Actions to get a single product
export const listProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST })
		// Make request to get a single product
		const { data } = await Axios.get(`/products/${id}`)

		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data.product,
		})
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
// Actions to delete a single product
export const deleteProduct = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: PRODUCT_DELETE_REQUEST })

		// Get userInfo from userLogin by destructuring
		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		// Make delete request to delete a product
		await Axios.delete(`/api/products/${id}`, config)

		dispatch({ type: PRODUCT_DELETE_SUCCESS })
	} catch (error) {
		dispatch({
			type: PRODUCT_DELETE_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
// Actions to create a single product
export const createProduct = () => async (dispatch, getState) => {
	try {
		dispatch({ type: PRODUCT_CREATE_REQUEST })

		// Get userInfo from userLogin by destructuring
		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		// Make post request to create a product
		const { data } = await axios.post('/api/products', {}, config)

		dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: PRODUCT_CREATE_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
// Actions to update a single product
export const updateProduct = (product) => async (dispatch, getState) => {
	try {
		dispatch({ type: PRODUCT_UPDATE_REQUEST })

		// Get userInfo from userLogin by destructuring
		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		// Make put request to update a product
		const { data } = await axios.put(
			`/api/products/${product._id}`,
			product,
			config
		)

		dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: PRODUCT_UPDATE_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
// Actions to create a review on a single product
export const createProductReview = (productId, review) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST })

		// Get userInfo from userLogin by destructuring
		const {
			userLogin: { userInfo },
		} = getState()
		
		// Make post request to create a review on a product
		await Axios.post(`/products/${productId}/reviews`, review)

		dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS })
	} catch (error) {
		dispatch({
			type: PRODUCT_CREATE_REVIEW_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
// Actions to get 3 top rated products
export const listTopProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_TOP_REQUEST })
		// Make request to get 3 top rated products

		const { data } = await Axios.get('/products/top')

		dispatch({
			type: PRODUCT_TOP_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: PRODUCT_TOP_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
