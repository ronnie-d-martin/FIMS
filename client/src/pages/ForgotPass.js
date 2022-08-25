import React from 'react';
import ForgotPassForm from "../components/Auth/ForgotPassForm";

import Logo from "../logo/INFOSYsecond.png"

export default function ForgotPass () {

  return (
    <div className='forgotPass-main'>
        <div className='forgotPass-wrapper'>
            <ForgotPassForm />
        </div>
        <div className="logo-container">
            <div className='secondinfosyLogo'>
                <img src={Logo} width={300} height={300} alt="Logo" /> 
            </div>
        </div>
    </div>
  );
}