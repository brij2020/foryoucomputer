import React,{ useEffect } from 'react';

const UseScript = (paymentResponse) => {
	console.log('called',paymentResponse)
	useEffect(() => {
		if(paymentResponse) {
			const scriptTag = document.createElement('script');
		scriptTag.src = paymentResponse.orderData.paytm_marchent_url;
		scriptTag.async = true;
		console.log(paymentResponse,'paymentResponse')
		document.body.appendChild(scriptTag);
		scriptTag.onload = () => {
			console.log('testhhh')
			var config = {
					"root": "",
					"flow": "DEFAULT",
					"data": {
					"orderId": paymentResponse.orderData.orderId, /* update order id */
					"token": paymentResponse.tokenInfo.txnToken, /* update token value */
					"tokenType": "TXN_TOKEN",
					"amount": {
						...paymentResponse.orderData.txnAmount
            		}
					
				},
				"handler": {
					"notifyMerchant": function(eventName,data){
					console.log("notifyMerchant handler function called");
					console.log("eventName => ",eventName);
					console.log("data => ",data);
					}
				}
				};
				if(window.Paytm && window.Paytm.CheckoutJS){
					window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
					// initialze configuration using init method
					window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
					// after successfully updating configuration, invoke JS Checkout
					window.Paytm.CheckoutJS.invoke();
					}).catch(function onError(error){
						console.log("error => ",error);
					});
					});
				}
		}
		// clean phase
		return () => {
			document.body.removeChild(scriptTag);
			}
		}
		
	},[paymentResponse]);
}
export default UseScript