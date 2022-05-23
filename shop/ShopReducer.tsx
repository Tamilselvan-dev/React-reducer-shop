export const intialState = {
  price: 0,
  products : []
}

export const Reducer = (state, action) =>{
  const [type, payload] = action();

  switch (type) {
      case 'ADD_TO_CART':
         console.log('ADD_TO_CART', payload)
         return {
           ...state,
           products: payload.products
         };
      case 'REMOVE_FROM_CART':
         console.log('REMOVE_FROM_CART', payload)
         return {
          ...state,
          products: payload.products
          };
      case 'UPDATE_PRICE':
          console.log('UPDATE_PRICE', payload)
          return {
            ...state,
            price: payload.total
            };
      default:
        throw new Error(`This ${type} is not reducer type case`)
  }
};

export default Reducer;