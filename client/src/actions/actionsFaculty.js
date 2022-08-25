import { FETCH_USER, FETCH_ALL, UPDATE, START_LOADING, DELETE, END_LOADING, CREATE } from '../constants/actionTypes';
import * as api from '../api/indexApi';
import Swal from "sweetalert2";
import 'animate.css';

export const getAbout = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAbout(id);

    dispatch({ type: FETCH_ALL, payload: { about: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getFaculty = (id) => async (dispatch) => {

    try {
      dispatch({ type: START_LOADING });

        const { data } = await api.fetchUser(id);

        
        dispatch({ type: FETCH_USER, payload: { user: data }});
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
  

};

export const getEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

      const { data } = await api.getEmail(email);
      
      dispatch({ type: FETCH_USER, payload: { user: data }});
      dispatch({ type: END_LOADING });
      
  } catch (error) {
      console.log(error);
  }


};

export const updatePersonal = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updatePersonal(id, user);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateEduc = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updateEduc(id, user);
  
      dispatch({ type: UPDATE, payload: data });
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

  export const updateCivil = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updateCivil(id, user);
  
      dispatch({ type: UPDATE, payload: data });
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

  export const updateWe = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updateWe(id, user);
  
      dispatch({ type: UPDATE, payload: data });
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

  export const updateLL = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updateLL(id, user);
  
      dispatch({ type: UPDATE, payload: data });
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

  export const addVoc = (id, data) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.addVoc(id, data);
  
      dispatch({ type: UPDATE, payload: data });
  
    } catch (error) {
      console.log(error);
    }
  };

  export const updateEmail = (id, postData) => async (dispatch) => {
    try {
      const { data } = await api.updateEmail(id, postData);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updatePassword = (id, postData) => async (dispatch) => {
    try {
      const { data } = await api.updatePassword(id, postData);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateImage = (id, postData) => async (dispatch) => {
    try {
      const { data } = await api.updateImage(id, postData);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  

  export const deleteMe = (id, navigate) => async (dispatch) => {
    try {
      await await api.deleteMe(id);
  
      dispatch({ type: DELETE, payload: id });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };


  export const createVoc = (formData) => async (dispatch) => {

    try {
      const { data } = await api.createVoc(formData);
  
      dispatch({ type: CREATE, data });
   
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


