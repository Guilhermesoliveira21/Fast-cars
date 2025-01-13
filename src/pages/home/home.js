import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; 
  padding: 1rem;

  
  @media (min-width: 1024px) {

    gap: 2rem;
  }

  @media (max-width: 999px) {
    flex-direction: column;
    align-items: center; 
  }

  @media (max-width: 600px) {
    gap: 0.5rem; 
  }
`;