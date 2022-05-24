import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from './ShopReducer';

const Context = createContext(initialState);

export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = async (product) => {
    const updatedCart = state.products.concat(product);
    await updatePrice(updatedCart);
    await dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter((currentProduct) => {
      currentProduct.name !== product.name;
    });
    updatePrice(updatedCart);
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (product) => {
    let total = 0;
    product.forEach((product) => (total += product.price));

    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total,
      },
    });
  };

  const value = {
    price: state.price,
    products: state.products,
    addToCart,
    removeFromCart,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useShop = () => {
  const ContextConsumer = useContext(Context);

  if (ContextConsumer === undefined) {
    throw new Error('useShop must be used within ShopContext');
  }
  return ContextConsumer;
};

export default useShop;
