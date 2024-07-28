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
export const MainContainer = styled.main`
    max-width: 100%;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background-color: #000;
`
export const VideoContainer = styled.section`
    max-width: 100%;
    min-height: 130vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 975px){
        min-height: 60vh;
    }
`

export const Container = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 15rem;
    letter-spacing: .5rem;
    text-align: center;
    color: #DC2F2F;
    z-index: 5;
    font-family: 'Robot Monster', sans-serif;
    margin-top: 14.5%;

    @media only screen and (max-width: 1400px){
        font-size: 10rem;
    }

    @media only screen and (max-width: 975px){
        font-size: 5rem;
        margin-top: 15rem;
    }
    
    @media only screen and (max-width: 450px){
        font-size: 3.75rem;
    }
`

export const Sobre = styled.section`
    width: 100%;
    height: 100%;
    background: url('/images/bg-sobre.jpg') #000 center center no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    padding: 100px 0;

    &:before {
        content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0, .85);
            z-index: -1;
    }

    @media only screen and (max-width: 975px){
        padding: 50px 0;
    }
`

export const ContainerSobre = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media only screen and (max-width: 975px){
        flex-direction: column-reverse;
        gap: 30px
    }
`
export const BoxText = styled.div`
    max-width: 100%;
    width: 100%;

    h2 {
        font-size: 16rem;
        color: #DC2F2F;
        text-align: left;
        font-weight: bold;
        line-height: 1;
        text-transform: uppercase;
        margin-bottom: 35px;
        font-family: 'Bebas Neue'
        /* text-transform: uppercase;
        writing-mode: vertical-rl;
        text-orientation: upright; */
    }

    p {
        font-size: 1.75rem;
        line-height: 1.5;
        color: #FFF;
        text-align: left;
    }

    p + p {
        margin-top: 10px;
    }

    @media only screen and (max-width: 1400px){
        max-width: 50%;

        h2 {
            font-size: 10rem;
        }

        p {
            font-size: 1.25rem;
        }
    }

    @media only screen and (max-width: 975px){
        max-width: 100%;

        h2 {
            font-size: 7rem;
            text-align: center;
            margin-bottom: 0px;
        }

        p {
            font-size: 1.2rem;
            text-align: center;
        }
    }
`
export const ImagemSobre = styled.img`
    height: auto;
    max-width: 500px;
    max-height: 500px;
    width: 100%;
    display: block;
    object-position: center;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 100px -5px rgba(255,255,255,.2);

    @media only screen and (max-width: 1400px){
        max-width: 350px;
        max-height: 350px;
    }
`

export const Servicos = styled.section`
    width: 100%;
    height: 100%;
    background: url('/images/details.jpg') top left no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
     
    &:before {
        content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(255, 255, 255, .6);
            z-index: -1;
    }
`

export const ContainerServicos = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;

    @media only screen and (max-width: 975px){
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        padding-top: 50px;
    }
`

export const BoxTextServicos = styled.div`
    max-width: 40%;
    width: 40%;

    h2 {
        font-size: 10rem;
        color: #DC2F2F;
        text-align: left;
        font-weight: bold;
        line-height: 1;
        text-transform: uppercase;
        margin-bottom: 30px;
        font-family: 'Bebas Neue'
    }

    @media only screen and (max-width: 1400px){
        h2 {
            font-size: 6rem;
        }
    }

    @media only screen and (max-width: 975px){
        max-width: 100%;
        width: 100%;
        padding: 0 10px;

        h2 {
            font-size: 5rem;
            margin-bottom: 15px;
            text-align: center;
        }
    }
`

export const ListaServicos = styled.ul`
    list-style: disc;
    padding-left: 20px;

    li {
        color: black;
        font-size: 1.75rem;
        text-align: left;
        line-height: 1.5;
        font-family: 'Bebas Neue', sans-serif;
    }

    li + li {
        margin-top: 15px
    }

    @media only screen and (max-width: 975px){
        width: fit-content;
        margin: 0 auto;
        padding-left: 0px;
        list-style: none;
        
        li {
            list-style: none;
            font-size: 1.5rem;
            text-align: center;
        }

        li + li {
            margin-top: 10px
        }
    }
`

export const ImagemServicos = styled.img`
    height: auto;
    max-width: 50%;
    max-height: 800px;
    width: 100%;
    display: block;
    object-position: center;
    object-fit: cover;

    @media only screen and (max-width: 975px){
        max-width: 100%;
    }
`

export const Treinamentos = styled.section`
    width: 100%;
    height: 100%;
    background: url('/images/smoke.jpg') #000 top left no-repeat;
    background-size: 100% auto;
    position: relative;
    z-index: 1;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0, .85);
        z-index: -1;
    }
`

export const ContainerTreinamentos = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;

    @media only screen and (max-width: 975px){
       flex-direction: column-reverse;
       gap: 50px;
    }
`

export const BoxTextTreinamentos = styled.div`
    max-width: 40%;
    width: 40%;

    h2 {
        font-size: 10rem;
        color: #DC2F2F;
        text-align: right;
        font-weight: bold;
        line-height: 1;
        text-transform: uppercase;
        margin-bottom: 35px;
        font-family: 'Bebas Neue'
    }

    @media only screen and (max-width: 1400px){
        h2 {
            font-size: 6rem;
        }
    }

    @media only screen and (max-width: 975px){
        max-width: 100%;
        width: 100%;
        padding-top: 50px;

        h2 {
            font-size: 5rem;
            text-align: center;
        }
    }
`

export const ListaTreinamentos = styled.ul`
    list-style: none;
    padding-right: 20px;

    li {
        color: #fff;
        font-size: 1.75rem;
        text-align: right;
        line-height: 1.5;
        font-family: 'Bebas Neue', sans-serif;
        position: relative;
    }

    li:before {
        content: '';
        position: absolute;
        top: 10px;
        right: -15px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
    }

    li + li {
        margin-top: 15px
    }

    @media only screen and (max-width: 1400px){
        padding: 0 10px;

        li {
            font-size: 1.5rem;
            text-align: center;
        }

        li:before {
            display: none;
        }

        li + li {
            margin-top: 10px
        }
    }
`

export const ImagemTreinamentos = styled.img`
    height: auto;
    max-width: 50%;
    max-height: 800px;
    width: 100%;
    display: block;
    object-position: center;
    object-fit: cover;

    @media only screen and (max-width: 1400px){
        max-width: 100%;       
    }
`

export const Contato = styled.section`
    max-width: 100%;
    width: 100%;
    padding: 100px 0;
    background: #FFF;

    h3 {
        text-align: center;
        font-size: 10rem;
        color: #DC2F2F;
        font-weight: bold;
        line-height: 1;
        text-transform: uppercase;
        margin-bottom: 35px;
        font-family: 'Bebas Neue'
    }

    @media only screen and (max-width: 1400px){
        h3 {
            font-size: 6rem;
        }
    }

    @media only screen and (max-width: 975px){
        padding: 50px 0;

        h3 {
            font-size: 5rem;
            margin-bottom: 20px;
        }
    }
`


