import styled from "styled-components";
import banner01 from '../../assets/banner01.jpg'
import { theme } from "../../theme/theme";

export const ContainerBanner = styled.div`

    /* background-color: aqua; */

    display: flex;
    /* justify-content: space-between; */
    /* padding: 1rem; */

    gap: 1rem;

    /* height: 70vh; */
    padding: 1rem 4px ;

    @media (max-width: 1399px) {
        display: flex;
        flex-direction: column;
    }

`;

export const BannerOne = styled.div`

    width: 80%;
    height: 100%;

    border-radius: 1rem;

    box-shadow: 0 0 4px #00000047;

    /* padding: 2rem; */
    overflow: hidden; 

    position: relative;

    /* @media (max-width: 1478px) {

    padding: 1rem 6rem;
    }

    @media (max-width: 1099px) {

        padding: 1rem 4rem;
    } */

    @media (max-width: 1399px) {
        width: 100%;
    }

    @media (max-width: 1149px) {

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }

`;

export const BannerOneContainerContent = styled.div`

    position: absolute;
    left: 0;
    top: 0;
    height: 100%;

    width: 40%;

    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1399px) {

    }

    div {
        margin-bottom: 10px;
    }

    div > p {
        background-color: ${theme.colors.red.red100};
        color: ${theme.colors.white.while300};
        padding: 1rem 2rem;

        border-radius: 2rem;

        font-size: 18px;
        font-weight: 700;

        @media (max-width: 1149px) {
            font-size: 14px;
            padding: .6rem 1rem;
        }  
        
        @media (max-width: 699px) {
            font-size: 12px;
        } 

    }

`;

export const BannerOneNew = styled.div`

    padding-bottom: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-size: 4rem;
        color: ${theme.colors.black.black500};

        span {
            color: ${theme.colors.red.red100};
        }

        @media (max-width: 1399px) {
            font-size: 3rem;
        }  
        @media (max-width: 699px) {
            font-size: 2rem;
            padding-bottom: 14px;
        } 
    }

    h3 {
        font-size: 3rem;
        margin-top: -30px;

        span {
            color: ${theme.colors.red.red100};
        }
        @media (max-width: 1399px) {
            font-size: 2rem;
        } 
        @media (max-width: 699px) {
            font-size: 2rem;
        } 
    }

`;

export const Banners = styled.div`

    width: 33%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 1399px) {
        width: 100%;
        display: flex;
        flex-direction: row;

        height: 100%;
    }

`;

export const BannerTwo = styled.div`

    width: 100%;
    /* height: 50%; */
    background-color: ${theme.colors.red.red300};

    border-radius: 1rem;

    padding: 2rem;

    box-shadow: 0 0 4px #00000047;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    @media (min-width: 1399px) {
        height: 50%;
    }

    @media (max-width: 1399px) {
        width: 100%;
        /* height: 100%; */
    }

    img {
        width: 120%;
        margin-top: -30px;

        @media (max-width: 1399px) {
        width: 100%;
        margin-top: 0px;
    }
    }

`;

export const BannerTwoBtn = styled.div`

    position: absolute;
    bottom: 30px;

    background-color: ${theme.colors.white.while300};
    color: ${theme.colors.black.black300};

    padding: .4rem 2rem;
    border-radius: 30px;

    cursor: pointer;
    transition: .2s;

    @media (max-width: 1299px) {
        font-size: 14px;
        bottom: 20px;
    }

    @media (max-width: 759px) {
        padding: .2rem 1rem;
        font-size: 14px;
    }

    &:hover {
        background-color: ${theme.colors.white.while100};
        opacity: .9;
    }


`;
