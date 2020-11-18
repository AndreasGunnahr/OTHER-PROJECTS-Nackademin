import styled from "styled-components";

export const MainWrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
`;

export const ChildrenWrapper = styled.div`
  padding: 0 2rem;

  min-height: calc(100vh - 58px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 1024px) {
    min-height: calc(100vh - 80px);
  }
`;
