import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledSlider = styled.div`

/* padding: 20px; */

/* background-color: #ccc; */



.slick-prev, .slick-next {
    color: #ff5722; /* Cor das setas */
    z-index: 1; /* Garante que elas apareçam sobre os slides */
    color: aqua;

  }

  .slick-prev:hover, .slick-next:hover {
    color: #4caf50; /* Cor ao passar o mouse */
  }

  .slick-arrow, .slick-prev{
    &::before{
        color: #ccc;
        font-size: 2rem;
    }
  }

  .slick-prev {
    left: 10px; /* Ajusta a posição da seta esquerda */
  }

  .slick-next {
    right: 26px; /* Ajusta a posição da seta direita */
  }

  .slick-dots li button {
    color: black;
  
  }

  .slick-dots li button:before {
    color: white; /* Cor dos pontos de navegação */

    /* background-color: #ff5722; */
    margin-top: -60px;
    font-size: 10px;
    opacity: .9;
  }

  .slick-dots li.slick-active button:before {
    color: ${theme.colors.red.red100}; /* Cor do ponto ativo */
    opacity: .9;
  }


`;

export const ContainerImage = styled.div`

    /* background-color: aqua; */

    height: 580px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: relative;
    padding: .6rem;
    

    img {
         width: 100%;
         height: 100%;
    object-fit: cover;
    /* box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px; */


    border-radius: 8px;
    /* transform: translateY(-50px);  */

        
    }
`;