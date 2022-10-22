import axios from 'axios'
console.log(process.env.REACT_APP_KEY,'env')
const Axios =  axios.create({
	   baseURL: 'http://localhost:8080',
      timeout: 1000,
      headers: {
      	'Content-Type': 'application/json',
    	Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo'))?.user_token?.token}`,
      }
})

export default  Axios; 