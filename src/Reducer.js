import { Title } from "@mui/icons-material";

export const initialState = {
  basket: [
    {
      id: "67457647",
      Title: "NEW Ipad Pro",
      price: 1200.0,
      rating: 4,
      image: "https://media.s-bol.com/kZ4Bz0JNgxxJ/1095x1200.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to your basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing an item
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // items exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id} as its not in basket)`);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
