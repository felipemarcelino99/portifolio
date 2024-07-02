import styled from 'styled-components';

export const Indent = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
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
`
export const LoadingContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    z-index: 999;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: black;
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
`

export const ContainerSobre = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
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
`

export const ImagemServicos = styled.img`
    height: auto;
    max-width: 50%;
    max-height: 800px;
    width: 100%;
    display: block;
    object-position: center;
    object-fit: cover;
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
`

export const ImagemTreinamentos = styled.img`
    height: auto;
    max-width: 50%;
    max-height: 800px;
    width: 100%;
    display: block;
    object-position: center;
    object-fit: cover;
`

export const Contato = styled.section`
    max-width: 100%;
    width: 100%;
    padding: 50px 0;
    background: #FFF;
`