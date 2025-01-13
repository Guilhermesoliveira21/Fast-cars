import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`

    display: flex;
    flex-direction: column;
    
    /* padding: 1rem 12rem; */

    background-color: ${theme.colors.white.while100};

    @media (max-width: 768px) {

        background-color: aqua;
        display: none;
    }

`;

export const HeaderTop = styled.div`

    padding: 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

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

export const HeaderLinks = styled.div`
    padding: 1rem 12rem;
    background-color: ${theme.colors.black.black300};

    color: ${theme.colors.white.while300};

    display: flex;
    justify-content: space-between;

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

export const HeaderContainerLink = styled.div`

    /* background-color: aqua; */

    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
    }

`;

export const LinkStyle = styled(Link)`

    color: ${theme.colors.white.while300};
    text-decoration: none;

    font-weight: 600;

`;

export const Search = styled.div`

    position: relative;

`;

export const SearchContainer = styled.form`

    width: 32rem;
    display: flex;

    input {
        width: 100%;
        padding: 8px 16px;

        outline: 0;
        border-radius: 8px 0 0 8px;

        border: 1px solid ${theme.colors.gray.gray500};
    }

    button {
        padding: 0 12px;
        cursor: pointer;

        background-color: ${theme.colors.red.red300};
        color: ${theme.colors.white.while300};

        font-weight: 600;
        border: 1px solid ${theme.colors.gray.gray500};

        border-radius: 0 8px 8px 0;


    }

`;

export const SearchResults = styled.div`

    background-color: ${theme.colors.white.while300};
    height: 90vh;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${theme.colors.gray.gray500};

    z-index: 999;

    overflow: hidden;
    overflow-y: scroll;

    position: absolute;

    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    /* align-items: center; */
    padding: .1rem .6rem;

    p {
        opacity: .8;
        font-size: 16px;
        font-weight: 500;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 4px;
    }

`;

export const LinkSearch = styled(Link)`

    opacity: .8;
    font-size: 14px;
    font-weight: 500;
    padding: .4rem .6rem;

    text-decoration: none;
    color: ${theme.colors.black.black500};
    cursor: pointer;

    &:hover {
        background-color: ${theme.colors.red.red100};
        color: ${theme.colors.white.while300};
    }

`;

// Header Mobile


export const ContainerHeaderMobile = styled.div`



position: relative;
    @media (min-width: 768px) {

        background-color: aqua;
        display: none;
    }

`;

export const HeaderMobile = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

`;

export const HeaderContentMobile = styled.div`

    position: absolute;

    z-index: 99;
    top: 90px;
    left: 0;

    height: 100vh;
    width: 100%;

    overflow: hidden;

    background-color: ${theme.colors.white.while300};
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        color: aqua;
        list-style: none;
        text-align: center;

        li {
            padding: 2rem ;
        }
    } 

`;

export const ContainerSearchMobile = styled.div`

    background-color: ${theme.colors.black.black300};

    padding: 1rem;
    width: 100%;

    display: flex;

    input {
        width: 100%;
        padding: 8px 16px;

        outline: 0;
        border-radius: 8px 0 0 8px;

        border: 1px solid ${theme.colors.gray.gray500};
    }

    button {
        padding: 0 12px;
        cursor: pointer;

        background-color: ${theme.colors.red.red300};
        color: ${theme.colors.white.while300};

        font-weight: 600;
        border: 1px solid ${theme.colors.gray.gray500};

        border-radius: 0 8px 8px 0;


    }

`;

export const ContainerSearchContent = styled.div`

    position: absolute;
    left: 0;
    z-index: 999;
    top: 134px;

    width: 100%;
    /* bottom: -24px; */

    padding: 1rem;

    div {
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.white.while300};
        border: 1px solid ${theme.colors.gray.gray500};

        border-radius: 6px;

        height: 70vh;

        overflow: hidden;
        overflow-y: scroll;
    }
`;