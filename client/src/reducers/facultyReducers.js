import { FETCH_USER, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
const initialState = {
  updateUsers: [],
  users: [],
  user: {},
  isLoading: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_USER:
      return { ...state, user: action.payload.user };
    case CREATE:
      return { ...state, posts: [...state.users, action.payload] };
    case UPDATE:
      return { ...state, users: state.users.map((user) => (user._id === action.payload._id ? action.payload : user)) };
    case DELETE:
      return { ...state, users: state.users.filter((user) => user._id !== action.payload) };

    default:
      return state;
  }
};

