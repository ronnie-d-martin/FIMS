import { FETCH_USER, AUTH, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_VERIFIED, FETCH_BY_UNVERIFIED } from '../constants/actionTypes';
const initialState = {
  users: [],
  user: {},
  authData: {},
  loading: this,
};
const adminReducer = (state = initialState , action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, users: action.payload.data };
    case UPDATE:
      return { ...state, users: state.users.map((user) => (user._id === action.payload._id ? action.payload : user)) };
    case DELETE:
      return { ...state, users: state.users.filter((user) => user._id !== action.payload) };
      case CREATE:
        return { ...state, users: action.payload.data };
    default:
      return state;
  }
};

export default adminReducer;

