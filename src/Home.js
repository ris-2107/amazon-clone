import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
           
           <div class="home__container">
           <img
           className="home__image" 
           src="https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=720&w=1280" 
            />

            <div className="home__row">
            

            <Product
                id="231235"
                title="The lean Startup || Author:- Eric Ries || PaperBack"
                price={99.99} 
                image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
                rating={3}
                />
            
                <Product
                id="231236"
                title="Philips Hair Dryer || 400 Watt | 1 year warranty on select shops || Keratin-Treatment compatible"
                price={799.99} 
                image="https://m.media-amazon.com/images/I/71ie3xP1YGL._SL1500_.jpg"
                rating={4}
                />
                
                <Product
                id="231237"
                title="Bosch Washing Machine || Heavy Duty || 8Kg || 7200rpm motor || 5 year warranty on motor"
                price={799.99} 
                image="https://m.media-amazon.com/images/I/71DGPoGZY9L._SL1500_.jpg"
                rating={5}
                />

            </div>



            <div className="home__row">
            <Product
                id="231234"
                title="Homesake || Abstract Shaped || Brown & Black Textured Handcrafted Wall or Ceiling Lamp with Shade"
                price={4250.59} 
                image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/13/7d5baf7e-7ab8-4f5c-9bc2-b884173a46781584049161251-1.jpg"
                rating={3}
                />

            <Product
                id="231238"
                title="JBL C100SI In Ear Wired Earphones with Mic (Black) || Brand: JBL"
                price={679.99} 
                image="https://m.media-amazon.com/images/I/61ptzNC8r8L._AC_UL480_FMwebp_QL65_.jpg"
                rating={4}
                />

                <Product
                id="231239"
                title="Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
                price={8999.99} 
                image="https://m.media-amazon.com/images/I/61W4meSdVQL._SL1000_.jpg"
                rating={3}
                />


                <Product
                id="231240"
                title="Tata Salt || 1kg || Brand: QZON"
                price={299.99} 
                image="https://m.media-amazon.com/images/I/61cHb0Tx9sL._SL1000_.jpg"
                rating={1}
                />


                <Product
                id="231241"
                title="ADIDAS || X FLOW.3 LL FG Football Shoes For Men (White)"
                price={999.99} 
                image="https://rukminim1.flixcart.com/image/880/1056/kw3v0cw0/shoe/x/f/v/11-lel17-11-adidas-ftwwht-ironmt-solred-original-imag8vf2kvbzhagc.jpeg?q=50"
                rating={4}
                />
            
            </div>


            <div className="home__row">
            <Product
                id="231242"
                title="Casio Analog Black Dial Men's Watch || MTP-1374HSG-1AVIF (A1652)"
                price={2999.99} 
                image="https://m.media-amazon.com/images/I/61YQP0HD1ZL._UL1100_.jpg"
                rating={4}
                />
                <Product
                id="231245"
                title="Vero Moda || Brown & Maroon Printed A-Line Midi Dress"
                price={759.99} 
                image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14067110/2021/9/2/8a361e06-92cd-43e3-b76e-6da0ad9048f11630581853035VeroModaBrownMaroonPrintedA-LineMidiDress1.jpg"
                rating={5}
                />
            
            <Product
                id="231243"
                title="Vero Moda || Women Black & White Tie-Up Neck A-Line Dress"
                price={1499.99} 
                image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14066896/2021/8/31/c5088570-014c-4be3-b25f-f253769a9db31630412399007VeroModaWomenBlackWhiteTie-UpNeckA-LineDress1.jpg"
                rating={4}
                />

            <Product
                id="231244"
                title="Maybelline || New York Hypercurl Waterproof Mascara - Black 9.2 ml"
                price={499.99} 
                image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10849058/2021/3/18/c2eee476-33da-4960-8bbc-29e3a5ab71a61616069554469-Maybelline-New-York-Hypercurl-Waterproof-Mascara---Black-92--1.jpg"
                rating={5}
                />

            </div>
        
   
        </div>
        </div>
    );
}

export default Home;