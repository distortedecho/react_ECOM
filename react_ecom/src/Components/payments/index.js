import axios from "axios";

const PayButton = ({cartItems})=>{
    const handleCheckout = () =>{
        console.log(cartItems);
       axios.post("http://localhost:8080/stripe/create-checkout-session",{    
          cartItems,
          userId: 1
       })
        .then((res)=>{
            console.log(res.data.url);
            if(res.data.url){
                window.location.href = res.data.url;
            }
        })
        .catch((err)=>console.log(err.message));
    };

    return (
        <>
            <button className="btn btn-outline-dark w-100 mb-4 mt-1" onClick={()=> handleCheckout()}>Check Out</button>
        </>
    )
}

export default PayButton;