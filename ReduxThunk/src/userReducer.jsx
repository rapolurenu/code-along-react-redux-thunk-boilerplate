const initialState = { users: [], error: '' };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return {
        ...state,
        users: action.payload,
        error: ''
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        users: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
