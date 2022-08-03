const initialState = {
  selectedItems: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.selectedItems];
      const updatedIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...state.selectedItems[updatedIndex] };
        updatedItem.quantity++;
        updatedCart[updatedIndex] = updatedItem;
      }

      const totalPrice = updatedCart.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0);
 
      return {
        ...state,
        selectedItems: updatedCart,
        total: totalPrice,
      };
    }

    case "REMOVE_FROM_CART": {
      const filteredProducts = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      const totalPrice = filteredProducts.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0);

      return {
        ...state,
        selectedItems: filteredProducts,
        total: totalPrice,
      };
    }

    case "INCREASE": {
      const updatedIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatedItem = { ...state.selectedItems[updatedIndex] };
      updatedItem.quantity++;

      const updatedSelectedItems = [...state.selectedItems];
      updatedSelectedItems[updatedIndex] = updatedItem;
      const totalPrice = updatedSelectedItems.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0);
      return {
        ...state,
        selectedItems: updatedSelectedItems,
        total: totalPrice,
      };
    }

    case "DECREASE": {
      const updatedIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatedItem = { ...state.selectedItems[updatedIndex] };

      if (updatedItem.quantity === 1) {
        const filteredProducts = state.selectedItems(
          (item) => item.id !== action.payload.id
        );

        const totalPrice = updatedSelectedItems.reduce((acc, cur) => {
          return acc + cur.quantity * cur.price;
        }, 0);

        return {
          ...state,
          selectedItems: filteredProducts,
          total: totalPrice,
        };
      }

      updatedItem.quantity--;

      const updatedSelectedItems = [...state.selectedItems];
      updatedSelectedItems[updatedIndex] = updatedItem;
      const totalPrice = updatedSelectedItems.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0);
      return {
        ...state,
        selectedItems: updatedSelectedItems,
        total: totalPrice,
      };
    }

    case "CLEAR": {
      return {
        ...state,
        selectedItems: [],
        total:0
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
