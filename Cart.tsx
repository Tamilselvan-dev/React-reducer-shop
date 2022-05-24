import * as React from 'react';
import styled from 'styled-components'
import useShop from './shop/ShopContext'
import ProductCard from './ProductCard'

const Cart = () => {
  const { products, price } = useShop();

  return (
      <div>
      <Title>Your cart total is {price}.00$</Title>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      </div>
     
  )
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

