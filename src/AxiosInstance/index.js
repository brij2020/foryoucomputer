import axios from 'axios'
let baseURL = '';
baseURL = 'https://ecom-electronic.onrender.com'
// baseURL = 'http://localhost:8080'
console.log('base url', baseURL)
const Axios =  axios.create({
	   baseURL: baseURL,
      // timeout: 1000,
      headers: {
      	'Content-Type': 'application/json',
    	Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo'))?.user_token?.token}`,
      }
})

export default  Axios; 