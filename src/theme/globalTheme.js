import styled from "styled-components";

export const GlobalTheme = styled.div`
    min-height: 100vh;
    width: 100%;

`;

export const ContainerTheme = styled.div`
    /* min-width: 1280px; */
    overflow: hidden;

    @media (max-width: 1280px) {
        min-width: 100%;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

export const ContainerBody = styled.div`

width: 100%;


    padding: ${({pd}) => pd || '1rem 12rem'};

    background-color: ${({bg}) => bg || '#fff'};

    @media (max-width: 1478px) {

        padding: 1rem 6rem;
    }

    @media (max-width: 1099px) {

        padding: 1rem 4rem;
    }

    @media (max-width: 768px) {

        padding: 1rem;
    }
    

`;