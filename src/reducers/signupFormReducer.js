export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  zipCode: '',
  street: '',
  number: '',
  neighborhood: '',
  city: '',
  state: '',
};

export const signupFormReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };

    case 'SET_ADDRESS':
      return {
        ...state,
        ...action.payload,
      };

    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
};
