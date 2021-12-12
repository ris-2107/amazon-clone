import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e =>{
        e.preventDefault();

        // some fancy Firebase Register!!

        auth.createUserWithEmailAndPassword (email, password)
        .then((auth) => {
            console.log(auth);        //Succesfully created user with email and password
            if(auth) {
                history.push('/')     // if user acount gets created, user then directed to the homepage!!
            }
        })

        .catch(error => alert(error.message))


    }

    const signIn = e =>{

        // Fancy Firebase things coming Up!!

        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }




    return (
        <div className='login'>
            <Link to='/'>
            <img  className='login__logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG21.png'/>
            </Link>

            <div className='login__container'>

                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange=
                    {e => setPassword(e.target.value)}/>

                    <button onClick={signIn}
                    type='submit'
                    className='login__signInButton'>Sign in </button>
                </form>
                <p>
                    By signing-in, you are agreeing to all the conditions of the Use & Sale.
                    Please see our Privacy policy for further details about the terms and conditions involved.
                </p>

                <button onClick={register}
                className='login__registerButton'> Create your Account </button>
                
            </div>

        </div>
    )
}

export default Login
