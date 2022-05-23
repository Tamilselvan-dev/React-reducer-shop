import * as React from 'react';
import styled from 'styled-components'

const Cart = () => {

  return (
     <Title>Your cart total is 100.00$</Title>
  )
}

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

export default Cart