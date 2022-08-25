import React from "react";
import SignInForm from "../components/Auth/AuthSignIn";
import Logo from "../logo/INFOSY.png"

export default function SignIn() {
 
  return (
    <div className='signIn-main'>
        <div className='infosyLogo'>
          <img src={Logo} width={300} height={300} alt="Logo" /> 
        </div>
        
        <div className='signInForm-wrapper'>
            <SignInForm />
        </div>
    </div>
  );
}