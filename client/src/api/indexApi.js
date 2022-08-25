import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchFaculty = () => API.get('/admin');
export const updateVerify = (id) => API.patch(`/admin/${id}/updateVerify`);
export const updatePersonalAdmin = (id, user) => API.patch(`/admin/${id}/updatePersonalAdmin`, user);
export const updateEducAdmin = (id, user) => API.patch(`/admin/${id}/updateEducAdmin`, user);
export const updateCivilAdmin = (id, user) => API.patch(`/admin/${id}/updateCivilAdmin`, user);
export const updateLLAdmin = (id, user) => API.patch(`/admin/${id}/updateLLAdmin`, user);
export const updateWeAdmin = (id, user) => API.patch(`/admin/${id}/updateWeAdmin`, user);
export const addVocAdmin = (id, data) => API.patch(`/admin/${id}/addVocAdmin`, data);
export const deleteUser = (id) => API.delete(`/admin/${id}/deleteUser`);
export const AddUser = (formData) => API.post('/admin/AddUser', formData);
export const getAbout = () => API.get(`/admin/getAbout`);
export const updateAbout = (id, user) => API.patch(`/admin/${id}/updateAbout`, user);


export const fetchUser = (id) => API.get(`/user/${id}`);
export const fetchAbout = (id) => API.get(`/user/${id}/getAbout`);
export const getEmail = (email) => API.get(`/user/`, email);
export const updatePersonal = (id, user) => API.patch(`/user/${id}`, user);
export const updateEduc = (id, user) => API.patch(`/user/${id}/updateEduc`, user);
export const updateCivil = (id, user) => API.patch(`/user/${id}/updateCivil`, user);
export const updateLL = (id, user) => API.patch(`/user/${id}/updateLL`, user);
export const updateWe = (id, user) => API.patch(`/user/${id}/updateWe`, user);
export const addVoc = (id, data) => API.patch(`/user/${id}/addVoc`, data);
export const deleteMe = (id) => API.delete(`/user/${id}/deleteUser`);
export const updateImage = (id, postData) => API.patch(`/user/${id}/updateImage`, postData);
export const updateEmail = (id, postData) => API.patch(`/user/${id}/updateEmail`, postData);
export const updatePassword = (id, postData) => API.patch(`/user/${id}/updatePassword`, postData);


export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);
export const signInAdmin = (formData) => API.post('/authAdmin/signinAdmin', formData);

export const createVoc = (formData) => API.post(`/user/createVoc`, formData);