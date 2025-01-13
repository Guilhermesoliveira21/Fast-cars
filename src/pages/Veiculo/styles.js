import styled from "styled-components";
import { theme } from "../../theme/theme";

export const ContainerVeiculo = styled.div`

    display: flex;
    /* background-color: aqua; */
    gap: 1rem;

    @media (max-width: 1269px) {
        flex-direction: column;
    }

`;

export const ContainerContent = styled.div`

    width: 70%;    
    /* box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px; */
    border-radius: .4rem;
    
    /* padding: 1rem 2rem; */

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 1rem;

    @media (max-width: 1269px) {
        width: 100%;
    }

`;

export const ContainerDetail = styled.div`

    background-color: ${theme.colors.white.white100};
    border-radius:  .4rem;
    box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;

    padding: ${({pd}) => pd || '0'};

    @media (max-width: 999px) {
    padding: 1rem;
}

`;

export const ContainerMenu = styled.div`

    display: flex;
    flex-direction: column;

    gap: 1rem;
    width: 30%;

    height: 100%;

    @media (max-width: 1269px) {
        width: 100%;
    }

`;

export const ContainerAside = styled.aside`

    width: 100%;
    box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;
    border-radius:  .4rem;
    background-color: ${theme.colors.white.white100};

    padding: ${({pd}) => pd};

    height: 100%;

`;

export const TableFipe = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 2rem;

    div > h3 {
        font-size: 1.6rem;
    }

`;