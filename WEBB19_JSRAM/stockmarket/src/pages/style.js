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

export const HomeContainer = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  background: url(${({ background }) => background}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 500px;
  filter: hue-rotate(194deg);
`;

export const HomeTitle = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  color: white;
  margin-top: 2rem;
`;
