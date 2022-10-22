import axios from 'axios'

const Axios =  axios.create({
	   baseURL: 'https://foryoucomputer-backendv2.onrender.com',
      timeout: 1000,
      headers: {
      	'Content-Type': 'application/json',
    	Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo'))?.user_token?.token}`,
      }
})

export default  Axios; 