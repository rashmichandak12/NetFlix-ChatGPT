import React, {useRef, useState} from 'react'
import Header from './Header'
import { provider, auth } from '../utils/firebase'
import { signInWithPopup } from "firebase/auth";
import { BG_URL } from "../utils/constants"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage] = useState(null);
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validation
        //checkValidData(email, password);
        //const msg = checkValidData(email.current.value, password.current.value);
        //console.log(msg);
        //setErrorMessage(msg);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                
            });
        
    }

  return (

    <div>
        <Header/>
        <div className="absolute">
            <img src={BG_URL} alt="body_logo"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="p-12 absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="name" placeholder="Full Name" 
                    className="p-4 my-4 w-full bg-gray-700" />)
            }
            
            <input ref={email}
                    type="text" placeholder="Email Address" 
                    className="p-4 my-4 w-full bg-gray-700"/>

            <input ref={password}
                    type="password" placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-700" />

            <p className="text-red-500">{errorMessage}</p>
            <button 
                    className="p-4 my-6 bg-red-500 w-full rounded-lg"
                    onClick={handleButtonClick}
            >
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <button 
                    className="p-4 my-6 bg-red-500 w-full rounded-lg"
                    onClick={handleButtonClick}
            >
                Sign In With google
            </button>

            <p 
                className="py-4 cursor-pointer" 
                onClick={toggleForm}>{isSignInForm ? "Don't have an account? Sign Up Now!" : "Already a User. Sign In!"}
            </p>
        </form>
    </div>
  )
}

export default Login