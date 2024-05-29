const initialState = {
    users: [],
    error: ''
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return { ...state, users: action.payload, error: '' };
      case 'FETCH_USERS_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  