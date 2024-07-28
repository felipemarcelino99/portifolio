import styled from 'styled-components';

export const Form = styled.form`

    border: 2px solid  #D0D3D4;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(220, 47, 47, .2);
    padding: 50px 30px;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;


    & > fieldset {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        max-width: 100%;
    }

    & > fieldset + fieldset {
        margin-top: 20px;
    }

    & > fieldset > fieldset {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;
        flex-direction: column;
        width: 100%;
        max-width: 100%;
    }

    & > fieldset > fieldset label {
        color: #000;
        font-weight: bold;
        font-size: 1.4rem;
        text-align: left;
        text-transform: uppercase;
    }

    & > fieldset > fieldset input,
    & > fieldset > fieldset select,
    & > fieldset > fieldset textarea {
        border: 2px solid  #D0D3D4;
        border-radius: 10px;
        padding: 8px 15px;
        font-size: 1.6rem;
        color: #000;
        display: block;
        width: 100%;
        max-width: 100%;
    }

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 auto;
        padding: 10px 25px;
        background: #DC2F2F;
        color: #FFF;
        text-align: center;
        font-weight: 900;
        font-size: 2.4rem;
        margin-top: 30px;
        font-family: 'Bebas Neue';
        text-transform: uppercase;
        border-radius: 8px;
        letter-spacing: 2px;

    }

    @media only screen and (max-width: 975px){
        padding: 35px 20px;

        & > fieldset {
            flex-direction: column;
        }

        & > fieldset > fieldset label {
            font-size: 1.1rem;
        }

        & > fieldset > fieldset input,
        & > fieldset > fieldset select,
        & > fieldset > fieldset textarea {
            padding: 5px 10px;
            font-size: 1.4rem;
        }

        & > button {
            padding: 7px 15px;
            background: #DC2F2F;
            font-size: 1.6rem;
        }
    }
`

export const Error = styled.span`
    font-size: 11px;
    color: #DC2F2F;
    font-weight: bold;
`
