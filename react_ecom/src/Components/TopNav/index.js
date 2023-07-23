import { Link } from 'react-router-dom';
import './_top-nav.scss';
import { useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import { gapi } from 'gapi-script';

const TopNav = ()=>{

    const cartItemCount = useSelector(state=>state.cr.totalItems);
    const [userDetails, setUserDetails] = useState("");

    const successHandler = (res) => {
        // Handle the successful login, e.g., set user state or perform other actions
        setUserDetails(res.profileObj)
      };
    
      const failureHandler = (error) => {
        // Handle login failure
        console.log('Login failed:', error);
      };

    return(
        <div>
            <div className='header bg-dark'>
                <div className='row top-nav-row'>
                <div className='brand my-1'>
                    <h1> eStore </h1>
                </div>
                <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                    <div className='dropdown m-0 p-0'>
                    <select className='select-btn w-100 p-0 m-0'>
                        <option> Men </option>
                        <option> Women </option>
                        <option> Kids </option>
                    </select>
                    </div>
                    <input className='form-control ' placeholder='Search...'/>
                    <button> <i className='fa fa-search'/> </button>
                </div>
                <div className='login-container p-0'>
                    <i className='fa fa-user-circle user-icon'/>
                    <h5> 
                        {
                            userDetails==="" ?
                            <GoogleLogin
                                clientId='62155724394-ojdnufrchf5oopks3j23pl8t4rlvdej8.apps.googleusercontent.com'
                                cookiePolicy='single_host_origin'
                                buttonText = 'Login'
                                plugin_name = 'hello' 
                                onSuccess={successHandler}
                                onFailure={failureHandler}
                            />
                            :
                            userDetails.name
                        }
                    </h5>
                </div>
                    <div className='cart-wishlist'>
                        <Link to="/cart">
                            <ul className='p-0'>
                                <li className='list-icon'> <i className='fa fa-heart'/></li>
                                <li className='list-icon'>
                                    <i className='fa fa-shopping-cart'/>
                                    {
                                        cartItemCount!==0 ?
                                            <div id='cart-item-count'>
                                                <p> {cartItemCount} </p>
                                            </div>
                                        : <></>
                                    }
                                </li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;