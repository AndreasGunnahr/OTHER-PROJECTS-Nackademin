import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  text-align: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background: ${({ theme }) => theme.color.grey};
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
`;

export const ListWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.grey};
  max-width: 500px;
`;

export const ListItem = styled.h1`
  font-size: 1.25rem;
  margin-top: 1rem;
  color: white;
  text-transform: uppercase;
`;

export const ListTitle = styled.h1`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.blue};
  text-transform: uppercase;
`;
