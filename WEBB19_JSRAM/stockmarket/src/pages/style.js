import styled from "styled-components";

export const PagesContainer = styled.div`
  max-width: 1100px;
  overflow-y: scroll;
  max-height: calc(100vh - 250px);
  margin: 1rem auto;
`;

export const PagesWrapper = styled.div`
  max-width: 1100px;
  margin: 2rem auto 0 auto;
  background: ${({ theme }) => theme.color.grey};
  padding: 1rem;
  border-radius: 10px;
`;

export const PagesDescription = styled.h1`
  color: ${({ theme }) => theme.color.blue};
  text-transform: uppercase;
  font-size: 1.25rem;
`;

export const PagesTitle = styled.h1`
  color: ${({ theme }) => theme.color.blue};
  font-size: 2rem;
  text-transform: uppercase;
  max-width: 1100px;
  margin: 0 auto 0 auto;
`;
