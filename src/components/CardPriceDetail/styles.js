import styled from "styled-components";
import { theme } from "../../theme/theme";

export const Container = styled.div`



`;

export const ContainerHeader = styled.div`

    padding-bottom: 2rem;

    h2 {
        font-size: 2.4rem;
        color: ${theme.colors.black.black300};
        font-weight: 600;
    }

    p {
        font-size: 14px;
        margin-top: 2px;
        color: ${theme.colors.black.black300};
        font-weight: 400;
    }

`;

export const Formulario = styled.form`

    width: 100%;

    /* height: 100%; */

    display: flex;
    flex-direction: ${({display}) => display || 'column'};
    align-items: center;

    gap: 1rem;

    label {
        width: 98%;
        margin-bottom: -10px;
        font-size: 14px;

        opacity: .8;
    }

    input {
        width: 100%;
        padding: 8px 16px;
        outline: 0;
        border-radius: 8px 0 0 8px;
        border: 1px solid #D9D9D9;

    }
    
    select {
        width: 100%;
        padding: 8px 16px;
        outline: 0;
        border-radius: 8px 0 0 8px;
        border: 1px solid #D9D9D9;
        
        color:rgb(117, 117, 117);
    }

    button {

        margin-top: .6rem;
        width: 100%;
        padding: .6rem 12px;
        cursor: pointer;
        background-color: rgb(200, 10, 46);
        color: #f2f2f2;
        font-weight: 600;
        border: 1px solid #D9D9D9;
        border-radius: 8px;
    }

`;

export const ContainerInstallment = styled.div`

    h3 {
        font-size: 1.4rem;
        color: ${theme.colors.black.black300};
        font-weight: 600;
        margin-bottom: .8rem;

        span {
            color: rgb(200, 10, 46);
            font-weight: 700;
        }
    }

    p {
        font-weight: 400;
        color: ${theme.colors.black.black300};
    }

`;

export const ContainerInstallmentForm = styled.div`

    margin-top: 1.4rem;

`;

export const InstallmentLiberado = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1.4rem;

    div > p {
        font-size: 14px;

        span {
            font-size: 20px;
            font-weight: 600;
        }
    }

`;