import { useSelector } from "react-redux";

const CheckOutSuccess = () =>{
    const cartData = localStorage.getItem('cart');
    const cartItemsData = JSON.parse(cartData);
    const cartItems = cartItemsData.cartItems;
    const totalItemsPrice = cartItemsData.totalItemsPrice


    console.log(cartItems);
   
    return (
        <div className="container mt-5">
        <h2>Successful Payment!</h2>
        <ul className="list-group mt-3">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.product_name}
              <span>
                ${item.price} x {item.quantity}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <h4>Total Price: ${totalItemsPrice}</h4>
        </div>
        {/* Add other payment success-related content */}
      </div>
    )
};

export default CheckOutSuccess;