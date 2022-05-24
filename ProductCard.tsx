import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import useShop from './shop/ShopContext';
import './style.css';

const ProductCard = ({ name, price, imageUrl }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, price, imageUrl };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <Wrapper background={imageUrl}>
      <AddButton onClick={handleClick} isInCart={isInCart}>
        <p>{isInCart ? '-' : '+' }</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <Subtitle>{price}.00$</Subtitle>
      </TextContainer>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
  transition: 300ms all;

  :hover {
    box-shadow: none;
  }
`;

const AddButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 90px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isInCart ? '#750D37' : '#21FA90')};
  border-radius: 50%;
  z-index: 1;
  padding: 5px;
  cursor: pointer;
  transition: 300ms all ease;

  p {
      font-size: 30px;
      font-weight: bold;
      color: white;
  }
`;

const TextContainer = styled.div`
  display: grid;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 20px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  color: #ffffff;
  margin: 0px;
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0px;
`;
