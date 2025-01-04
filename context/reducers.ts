export default function cartReducer(state: any, action: any) {
  switch (action.type) {
    case "TEMP-STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }

    case "BLUE-STATE": {
      return {
        ...state,
        custom_states: { ...state.custom_states, ...action.payload },
      };
    }
    case "MODAL": {
      return { ...state, modal: action.payload };
    }
    case "LOGIN": {
      return { ...state, user: action.payload };
    }
    case "SIGN-OUT": {
      return { ...state, user: null };
    }
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      return { ...state, cart: { items: state.cart.items + newItem } };
    }
    default:
      return state;
  }
}
