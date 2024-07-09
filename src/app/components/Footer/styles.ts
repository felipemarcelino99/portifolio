import styled from 'styled-components';

export const Indent = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (max-width: 975px){
        max-width: 100%;
        padding: 0 10px;
    }
`
export const Footer = styled.footer`
    padding: 50px 0;
    background: #000;
    
`
export const ContainerFooter = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 50px;

    @media only screen and (max-width: 975px){
        flex-direction: column;
        align-items: center;
    }
`
export const Box = styled.div`
    padding: 30px;
    max-width: 450px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid  #D0D3D4;

    h5 {
        color: #fff;
        font-weight: bold;
        text-align: left;
        font-size: 2.6rem;
        font-family: 'Teko';
    }

    a {
        color: #fff;
        text-align: left;
        font-size: 2.2rem;
        font-family: 'Teko';
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    @media only screen and (max-width: 975px){
        padding: 20px;
        max-width: 300px;

        h5 {
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 10px;
        }

        a {
            text-align: left;
            font-size: 1.8rem;
            justify-content: center;
        }

        a + a {
            margin-top: 10px;
        }

        & > div {
            gap: 1.5rem;
            justify-content: center;

            a + a {
                margin-top: 0;
            }
        }
    }
`

export const SocialMidia = styled.img`
    display: block;
    max-width: 25px;
    width: 100%;
    height: auto;

    @media only screen and (max-width: 975px){
        max-width: 20px;
    }
`

export const Tarja = styled.div`
   padding: 10px;
   background: #fff;
   color: #000;
   text-align: center;
   font-size: 12px;
   font-weight: bold;

   @media only screen and (max-width: 975px){
        font-size: 10px;
   }
`