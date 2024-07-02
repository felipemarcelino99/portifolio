import styled from 'styled-components';

export const Header = styled.header`
   width: 100%;
   max-width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 999;
   background-color: black;
`
export const Indent = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`
export const Container = styled.header`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 100px;
   width: 100%;
   max-width: 100%;
   padding: 25px 0;
`

export const ContainerLogo = styled.div`
   height: 45px;
   max-width: 45px;
   width: 100%;
   background-color: #fff;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`

export const Logo = styled.img`
   height: auto;
   max-width: 30px;
   width: 100%;
   display: block;
`

export const Menu = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;

   li {
      list-style: none;
      display: block;
      padding: 8px;
      color: #FFF;
      font-size: 2rem;
      text-align: left;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 5px;
   }
`
