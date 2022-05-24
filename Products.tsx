import * as React from 'react';
import styled from 'styled-components';
import { ProudctData, AccessoriesData } from './shop/ShopData';
import ProductCard from './ProductCard';
import './style.css'

const Product = () => {
  return (
    <div>
      <Title>Trending</Title>
      <ProductsWrapper>
        {ProudctData.map((value, index) => (
          <ProductCard key={index} {...value} />
        ))}
      </ProductsWrapper>

      <Title>Accessories</Title>
      <ProductsWrapper>
        {AccessoriesData.map((value, index) => (
          <ProductCard key={index} {...value} />
        ))}
      </ProductsWrapper>
    </div>
  );
};

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
  text-align: center;
`;

const ProductsWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Product