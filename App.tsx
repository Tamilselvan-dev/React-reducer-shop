import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom';
import styled from "styled-components";
import { ProductContext } from './shop/ShopContext';
import Product from './Products';
import Cart from './Cart';


export default function App() {
  return (
    <ProductContext>
        <Wrapper>
        <TitleWrapper>
          <h1>----------<H>Online</H><H1> Shop</H1>----------</h1>
        </TitleWrapper>
        <BrowserRouter>
        <LinkWrapper>
        <Link to='/' className="TopLink"><img src="https://img.icons8.com/cute-clipart/64/000000/home.png"/><p className="home">Home</p></Link>
        <Link to='/cart' className="TopLink"><img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-cart-children-toys-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png"/><p className="cart">Cart</p></Link>
        </LinkWrapper>
        <Routes>
        <Route path="/" element={ <Product/> } />
        <Route path="cart" element={ <Cart/> } />
      </Routes>      
        </BrowserRouter>
        </Wrapper>
    </ProductContext>
  );
};

const Wrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 40px;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  text-align: center;
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkWrapper = styled.div`
font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  box-shadow: 10px 10px 73px 0px rgba(0,0,0,0.30);
    margin: 20px;
    border-radius: 30px;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      background-color: #D3D5D7;
    }
  }
`;

const H = styled.span`
color: #3772FF;`

const H1 = styled.span`
color: #F6AA1C;`