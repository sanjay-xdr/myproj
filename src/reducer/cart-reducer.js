export const CartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, { ...payload, quatity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item._id !== payload._id),
      };

    case "INCREMENT":
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item._id === payload._id
            ? { ...item, quatity: item.quatity + 1 }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item._id === payload._id
            ? { ...item, quatity: item.quatity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};
