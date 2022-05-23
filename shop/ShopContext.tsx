import {createContext, useContext, useReducer } from 'react'
import Reducer , { intialState }from './ShopReducer'

const Context = createContext(intialState);

export const ProductContext = ({ children }) => {


  const [state, action] = useReducer(Reducer, intialState);

  const addToItem = () => {

  }

  const RemoveFromItem = () => {
    
  }

  const UpdateItem = () => {
    
  }


  const value = {
    price: state.price,
    proudcts: state.products,
    addToItem,
    RemoveFromItem
  }

  return <Context.Provider value={value}>{ children }</Context.Provider>
}

const Shop = () => {
  const ContextConsumer = useContext(Context);

  if(ContextConsumer === undefined){}

}