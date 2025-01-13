import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

export const ContaineCard = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    width: 100%;


`;

export const Card = styled.div`

    background-color: ${theme.colors.white.while300};
    padding: 1rem;

    
    border-radius: .6rem;

    width: 18rem;
    height: 420px;

    box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;

    @media (max-width: 999px) {

        width: 48%;
    }

`;

export const CardImage = styled.div`

    width: 100%;
    height: 150px;

    overflow: hidden;

    position: relative;

    img {

        width: 120%;
        position: absolute;
        top: -40px;
        left: -30px;
        /* padding: 1rem; */

        @media (max-width: 999px) {
            width: 100%;
            left: 0px;
        }
        
    }
`;

export const CardHeader = styled.div`

    margin: 1rem 0;

    h3 {
        font-weight: 600;
        color: ${theme.colors.black.black300};
    }

    p {
        height: 50px;
        font-size: .9rem;
        color: ${theme.colors.black.black500};
        padding-top: .4rem;
    }

`;

export const CardPrice = styled.div`

    h3 {
        font-weight: 600;
        color: ${theme.colors.black.black500};
    }

`;

export const CardYearEKm = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: .6rem;

    opacity: .9;
    p {
        font-size: .8rem;
        color: ${theme.colors.black.black500};
    }

`;

export const ContainerLink = styled.div`

    padding: 1rem 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinkStyle = styled(Link)`

    padding: .4rem 1rem;

    width: 100%;

    border-radius: 10px;
    text-decoration: none;

    text-align: center;

    font-weight: 600;
    font-size: 1rem;

    background-color: ${theme.colors.black.black300};
    color: ${theme.colors.white.while300};

`;

export const CardCity = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0 .2rem;
    
    p {
        font-size: .9rem;
        color: ${theme.colors.black.black500};
    }

    .icon {
        cursor: pointer;
    }
`;