import { AUTH, UPDATE } from '../constants/actionTypes';
import * as api from '../api/indexApi';
import Swal from "sweetalert2";
import 'animate.css';
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    
    navigate('/home');
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message,
      allowOutsideClick: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
};

export const signinAdmin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signInAdmin(formData);

    

    dispatch({ type: AUTH, data });
  
    
    navigate('/dashboard');
  } catch (error) {
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message,
      allowOutsideClick: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    localStorage.setItem("signupInfo", JSON.stringify(data));

    navigate('/');
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message,
      allowOutsideClick: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }
};

