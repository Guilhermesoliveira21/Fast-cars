import styled from "styled-components";
import { theme } from "../../theme/theme";


export const ContainerVeiculo = styled.div`

    display: flex;
    gap: 1rem;

    width: 100%;

    position: relative;

    min-height: 100vh;


   @media (max-width: 999px) {
        display: flex;
        flex-direction: column;
    }
   

`;

export const AsideContainer = styled.aside`

    position: static;
    top: 0;
    left: 0;

    height: 80vh;
    width: 26%;

    border-radius: 8px;

    background-color: ${theme.colors.white.while300};

    overflow: hidden;

    box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;

    @media (max-width: 999px) {
        width: 100%;
    }

    @media (min-width: 999px) and (max-width: 1299px) {
    width: 50%;
}


    div > h2 {
        opacity: .8;
        padding-bottom: 1rem;
    }

`;

export const ContainerCars = styled.div`

    width: 80%;

    @media (max-width: 999px) {
        width: 100%;
    }

`;

export const Paginacao = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

    padding-top: 1rem;

    button {
        padding: .6rem 1.2rem;
        background-color: ${theme.colors.red.red100};
        border: none;
        border-radius: 6px;

        font-weight: 600;
        color: ${theme.colors.white.while300};

        cursor: pointer;

        transition: .1s;

        &:hover {
            background-color: ${theme.colors.red.red300};
        }
    }

`;