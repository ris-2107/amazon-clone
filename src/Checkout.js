import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';



function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className= "checkout">
            <div className='checkout__left'>
            <img className='checkout__ad'
             src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg'
             alt='' />

             <div >
                 <h3>Hello, {user?.email}</h3>
                 <h2 class='checkout__title'>
                     Your Shopping Basket </h2>


                     {basket.map(item => (
                        <CheckoutProduct 
                         id= {item.id}
                         title={item.title}
                         image={ item.image}
                         price={item.price}
                         rating={item.rating}
                         />
                     ))}
                     

                     {/* CheckoutProduct */}
                     {/* CheckoutProduct */}
                     {/* CheckoutProduct */}
                     {/* CheckoutProduct */}
             </div>


             </div>



             <div className='checkout__right'>

                 <Subtotal />
                 {/*Sub-total component */}


             </div>



        </div>
    )
}
export default Checkout
