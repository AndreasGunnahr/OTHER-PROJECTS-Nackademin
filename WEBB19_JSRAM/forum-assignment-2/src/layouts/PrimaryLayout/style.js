import styled from "styled-components";

export const MainWrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
`;

export const ChildrenWrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 200px minmax(300px, 1fr) 400px 200px;
  grid-gap: 50px;
  min-height: calc(100vh - 58px);

  @media (min-width: 1024px) {
    min-height: calc(100vh - 80px);
  }
`;
