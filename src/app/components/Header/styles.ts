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

    @media only screen and (max-width: 975px){
         max-width: 100%;
         padding: 0 25px;
    }
`
export const Container = styled.header`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 100px;
   width: 100%;
   max-width: 100%;
   padding: 25px 0;

   @media only screen and (max-width: 975px){
      gap: 50px;
      max-width: 100%;
      justify-content: space-between;
    }
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

   @media only screen and (max-width: 975px){
      height: 30px;
      max-width: 30px;
    }
`

export const Logo = styled.img`
   height: auto;
   max-width: 30px;
   width: 100%;
   display: block;

   @media only screen and (max-width: 975px){
      max-width: 20px;
    }
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

   @media only screen and (max-width: 975px){
      /* gap: 20px;

      li {
         font-size: 1.6rem; 
      } */
         display: none;
    }
`

export const Hamburger = styled.div`
   display: none;
   align-items: center;
   justify-content: center;
   height: 20px;
   max-width: 30px;
   width: 100%;
   right: 20px;
   top: 20px;
   
   & div {
      height: 4px;
      width: 100%;
      max-width: 100%;
      background: #fff;
      border-radius: 3px;
      position: relative;
   }

   & div:after,
   & div:before {
      content: '';
      height: 4px;
      width: 100%;
      max-width: 100%;
      background: #fff;
      border-radius: 3px;
      position: absolute;
   }

   & div:after {
      bottom: -9px;
   }

   & div:before {
     top: -9px;
   }

   &.open {
      display: flex;
   }

`
