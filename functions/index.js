const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");

//Using Secret Keys below:-
const stripe = require("stripe")('sk_test_51K5Es9SEil7NXEZmQ8bmsL26XMaZwmdOcHwf6wkSrP77sTYYzThAYOK9G0XqqLRHC6LR4pL57vZFDPML6peIAkZS003v85mNE4');

// sk_test_51K5Es9SEil7NXEZmQ8bmsL26XMaZwmdOcHwf6wkSrP77sTYYzThAYOK9G0XqqLRHC6LR4pL57vZFDPML6peIAkZS003v85mNE4
// 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

//API Setup


// 1.--> App config
const app = express();



// 2.-->Middlewares
app.use(cors({origin: true}));
app.use(express.json());



// 3.-->API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
   const total = request.query.total;
    console.log('Payment request received BOOM!!!, For this amount (in paise) >>> ', total)   // ---> acts as an end poin to check whether the app's function folder is nicely deployed or  not 

    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //it is sub-units of the currency
        currency:"inr",
    });

// 201 means "ok, created"
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})


// 4.-->Listen command
exports.api=functions.https.onRequest(app);

//Example end point
//http://localhost:5001/challenge-3744f/us-central1/api 