import styled from "styled-components";
import { theme } from "../../theme/theme";

export const ContainerNameCar = styled.div`

display: flex;
justify-content: space-between;
align-items: center;

margin-bottom: 2rem;

@media (max-width: 999px) {
    flex-direction: column;
    align-items: start;
}
    h1 {
        color: ${theme.colors.black.black300};
        font-size: 2.2rem;
    }

    p {
        font-size: 14px;
        /* width: 60%; */

        @media (max-width: 999px) {
width: 60%;
}
    }

    div > h2 {
        color: ${theme.colors.black.black300};
        font-size: 2rem;
        font-weight: 600;

        @media (min-width: 1269px) {
        display: none;
        }
    }

`;

export const ContainerInfos = styled.div`

    display: flex;
    justify-content: space-between;
    justify-items: start;

    gap: 2rem 6rem;
    flex-wrap: wrap;

`;

export const Info = styled.div`

    p {
        font-size: 14px;
    }

    h4 {
        font-size: 1.2rem;
        color: ${theme.colors.black.black300};
    }

`;