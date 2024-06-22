import { createStore } from "redux";
const initialState = {
    total: 0,
    cart: [],
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          cart: [...state.cart, action.payload],
          total: state.total + action.payload.price,
        };
      default:
        return state;
    }
  };
  
const store = createStore(Reducer);
export default store;