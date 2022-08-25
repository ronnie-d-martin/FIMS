import React from "react";

import SignUpForm from "../components/Auth/AuthSignUp";

import Logo from "../logo/INFOSYsecond.png"

export default function SignUp () {

  return (
    <div className='signUp-main'>
        <div className='signUpForm-wrapper'>
            <SignUpForm />
        </div>
        <div className="logo-container">
            <div className='secondinfosyLogo'>
                <img src={Logo} width={300} height={300} alt="Logo" /> 
            </div>
        </div>
    </div>
  );
}