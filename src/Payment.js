import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css';
import {CardElement ,Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBaskeTotal } from './Reducer';
import { useEffect } from 'react';
import axios from './axios';
import { db } from './firebase';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const[succeeded, setSucceeded]= useState(false);
    const[processing, setProcessing]=useState("");
    const[error, setError]= useState(null);
    const[disabled, setDisabled]= useState(true);
    const[clientSecret, setclientSecret]= useState(true);


    useEffect(() => {

        // generate the special client secret that will allow us to charge the customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBaskeTotal(basket) * 100}`  //Stripe expects a total i a curriencies subunits (here, in paise ,instead of Rupees)
            });

            setclientSecret (response.data.clientSecret)

        }

        getClientSecret();

     } , [basket])  //whenever the basket contents change the amount changes, hence we need get a new secret for new amount of the basket
                  
     console.log('the secret is >>> ' , clientSecret)
    

     const handleSubmit = async (event) =>{
        //fancy-Stripe Stuff!!


        event.preventDefault();
        setProcessing(true)   
        
        // Due to the above code - If the payment is processing (after entering details and pressing enter) then the nutton gets disabled
        // and hence the "Buy Now " button  is not pressed multiple times!!


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:elements.getElement(CardElement)
            }

        }).then(({ paymentIntent }) =>{     // 'paymentIntent' is analogous to payment confirmation!!


            // the code below pushes the data of orders into the FireStore

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent?.id)
            .set({
                basket:basket,
                amount:paymentIntent?.amount,
                created: paymentIntent?.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'

            })

            history.replace('/orders')

        })  

    }

    const handleChange = event =>{
        //listen for changes in Cardelement and 
        //display any errors as the customer types their card details!
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");


    }   



    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to={'/checkout'}> {basket?.length} items </Link>
                    )
                </h1>

               {/*1. Payment section- Delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address:- </h3>
                    </div>
                   
                   


                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Near kidzee School, SaratPally, Golapbag.</p>
                        <p>Barddhaman, West Benagal</p>
                        <p>Phone No:- 6203478186</p>
                    </div>

                </div>

                {/* // 2. Payment section -Review items */}
                
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivey</h3>
                    </div>


                        <div className='payment__items'>
                            {basket.map(item => (
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            ))}

                        </div>

                </div>



                {/* // 3. Payment section- Payment Method */}

                <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>

                <div className='payment__details'>
                    
                    {/* Stripe-Magic 
                    */}
                    <form onSubmit={handleSubmit}>

                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                            <CurrencyFormat

                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                ) }

                                decimalScale={2}
                                value={getBaskeTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />  
                        <button className='button__Properties' disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> :
                            "Buy Now" }</span>
                        </button>

                        </div>
                        {/* errors */}
                        {error && <div>{error}</div>}

                    </form>
                </div>


            </div>

        </div>
            
    </div>
)
}

export default Payment
