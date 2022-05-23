import * as React from 'react';
import './style.css';
import { Router, Link } from '@reach/router';
import styled from "styled-components";
import Product from './Products'
import Cart from './Cart'



export default function App() {
  return (
        <Wrapper>
        <TitleWrapper>
          <h1>useReducer Hook</h1>
          <p>
            A <a href="https://designcode.io/">Design+Code</a> tutorial
          </p>
        </TitleWrapper>
        <LinkWrapper>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
        </LinkWrapper>
        <Router>
          <Product path="/" />
          <Cart path="/cart" />        
        </Router>
        </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;