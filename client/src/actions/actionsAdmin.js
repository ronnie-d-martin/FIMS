import { FETCH_USER,FETCH_ALL,CREATE, UPDATE, START_LOADING, FETCH_BY_VERIFIED, AUTH, FETCH_BY_UNVERIFIED, DELETE } from '../constants/actionTypes';
import * as api from '../api/indexApi';
import Swal from "sweetalert2";
import 'animate.css';

export const getFacultyData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFaculty();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateVerify = (id) => async (dispatch) => {
  try {
    const { data } = await api.updateVerify(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updatePersonalAdmin = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updatePersonalAdmin(id, user);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateEducAdmin = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateEducAdmin(id, user);

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

export const updateCivilAdmin = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateCivilAdmin(id, user);

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

export const updateWeAdmin = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateWeAdmin(id, user);

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

export const updateLLAdmin = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateLLAdmin(id, user);

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

export const addVocAdmin = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addVocAdmin(id, data);

    dispatch({ type: UPDATE, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const AddUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.AddUser(formData);

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

export const deleteUser = (id) => async (dispatch) => {
  try {
    await await api.deleteUser(id);

    dispatch({ type: DELETE, payload: id });
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




