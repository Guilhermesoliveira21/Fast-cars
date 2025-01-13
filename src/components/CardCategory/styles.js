import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

export const Container = styled.div`

    display: flex;
    gap: 1rem;

    @media (min-width: 960px) {
        width: 100%;

        overflow-x: scroll;
    }

`;

export const Card = styled(Link)`

    width: 20%;
    gap: 1rem;
    overflow: hidden;

    cursor: pointer;

    position: relative;

    
    @media (min-width: 960px) {
        width: 100%;

    }

    img {
        width: 100%;
        height: 10rem;
        object-fit: cover;

        border-radius: 8px;

        filter: brightness(.6);
    }

    h3 {
        position: absolute;
        color: ${theme.colors.white.while300};
        bottom: 20px;
        left: 30px;
    }

`;