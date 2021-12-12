import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from'./firebase'; 
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import Orders from './Orders';



// Using Publishable key below
const promise = loadStripe('pk_test_51K5Es9SEil7NXEZmm75z31ljOHNNV6NNcv8ygIT0cOEbq4O3KS2p8HhUtraqmFd8ssbGgapy19QUeYrsX0I5rlcS00PaUQXi8j');

// pk_test_51K5Es9SEil7NXEZmm75z31ljOHNNV6NNcv8ygIT0cOEbq4O3KS2p8HhUtraqmFd8ssbGgapy19QUeYrsX0I5rlcS00PaUQXi8j');
// pk_live_51K5Es9SEil7NXEZmHtd1SzBjz0dw4Edz0xtU0uZSl8e6symrYB7QGxK4xGAybupQiKZeNrO8I9Q11iGaDRcHYDpE00Yhec2sEr

function App() {


  const[{}, dispatch] = useStateValue();
  

  useEffect(() => { 
      //only runs once when app component loads...

    auth.onAuthStateChanged(authUser =>
      {
        console.log('The User is >>>> ', authUser);
        if(authUser){

          // the user just logged in or the User was logged in

          dispatch({
            type:'SET_USER',
            user:authUser

          })


        }else{
          //THe user is logged Out
          dispatch({
            type:'SET_USER',
            user:null

          })
        }
      })
  }, [])

  return(
    //BEM
    <Router>

    <div className="app">
  
      <Switch>

      <Route path="/login">
         <Login />
      </Route>

      <Route path="/orders">
        <Header/>
        <Orders />
      </Route>


      <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
        <Payment />
        </Elements>
        </Route>

      <Route path="/checkout">
          <Header/>
         <Checkout />
      </Route>

      <Route path="/">
        <Header/> 
         <Home />
      </Route>


    </Switch>
        
  
   
    
   </div>
   </Router>
   
  );
    
  }
export default App;
