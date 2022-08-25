import { FETCH_USER,FETCH_ALL, UPDATE, START_LOADING, FETCH_BY_VERIFIED, FETCH_BY_UNVERIFIED, DELETE } from '../constants/actionTypes';
import * as api from '../api/indexApi';
import Swal from "sweetalert2";
import 'animate.css';

export const getAbout = () => async (dispatch) => {
  try {
    const { data } = await api.getAbout();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAbout = (id) => async (dispatch) => {
  try {
    const { data } = await api.updateAbout(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updateWhole = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateWhole(id, user);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
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




