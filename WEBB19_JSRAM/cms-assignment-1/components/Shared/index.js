import styled, { css } from "styled-components";
import theme from "constants/theme";

export const headerFont = css`
  font-family: "Montserrat", sans-serif;
`;

export const textFont = css`
  font-family: "Raleway", sans-serif;
`;

export const Input = styled.input``;
export const TextArea = styled.input``;
export const Label = styled.input``;

export const H1 = styled.h1`
  ${headerFont};
  color: ${theme.color.black};
  text-transform: uppercase;
`;

export const H2 = styled.input``;
export const H3 = styled.input``;
export const H4 = styled.input``;

export const P = styled.p`
  ${textFont};
  color: ${theme.color.black};
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  ${textFont};
  color: ${theme.color.black};
  margin: 0;
  padding: 0;
`;

export const A = styled.a`
  ${headerFont};
  color: ${theme.color.black};
  text-decoration: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const FlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FlexColCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
