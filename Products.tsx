import * as React from 'react';
import styled from 'styled-components';
import { ProudctData } from './shop/ShopData';
import ProductCard from './ProductCard';

const Product = () => {
  return (
    <div>
      <Title>Welcome to TS Clothing Shop</Title>
      <ProductsWrapper>
        {ProudctData.map((value, index) => (
          <ProductCard key={index} {...value} />
        ))}
      </ProductsWrapper>
    </div>
  );
};

const Title = styled.h1`
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

export default Product