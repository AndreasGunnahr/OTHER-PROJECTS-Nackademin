import styled from "styled-components";

export const MainWrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
`;

export const ChildrenWrapper = styled.div`
  padding: 2rem;
  min-height: calc(100vh - 58px);
  display: flex;
  justify-content: ${({ placement }) =>
    placement === "top" ? "flex-start" : placement};
  align-items: ${({ placement }) => placement};
  @media (min-width: 1024px) {
    min-height: calc(100vh - 70px);
  }
`;
