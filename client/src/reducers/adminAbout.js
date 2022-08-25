import { FETCH_USER, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_VERIFIED, FETCH_BY_UNVERIFIED } from '../constants/actionTypes';
const initialState = {
  abouts: [],
  about: {},
  loading: this,
};
const adminReducer = (state = initialState , action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, abouts: action.payload.data };
    case UPDATE:
      return { ...state, abouts: state.abouts.map((about) => (about._id === action.payload._id ? action.payload : about)) };
    case DELETE:
      return { ...state, abouts: state.abouts.filter((about) => about._id !== action.payload) };
    default:
      return state;
  }
};

export default adminReducer;

