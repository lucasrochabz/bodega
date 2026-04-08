// fix: reducer ainda não utilizado
export const addressInitialState = {
  street: '',
  neighborhood: '',
  city: '',
  state: '',
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
