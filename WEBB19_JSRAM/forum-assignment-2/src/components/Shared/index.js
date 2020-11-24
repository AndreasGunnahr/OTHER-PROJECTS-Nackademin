import styled, { css } from "styled-components";
import { theme } from "constants/theme";
import { Link, NavLink } from "react-router-dom";

export const headerFont = css`
  font-family: "Montserrat", sans-serif;
`;

export const textFont = css`
  font-family: "Raleway", sans-serif;
`;

export const Input = styled.input`
  ${textFont};
  color: ${theme.color.black};
  height: 55px;
  padding-left: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  outline: 0;
`;

export const Label = styled.label`
  ${headerFont};
  color: ${theme.color.black};
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
  font-size: 1.25rem;
  display: flex;
`;

export const H1 = styled.h1`
  ${headerFont};
  color: ${theme.color.black};
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 1px;
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
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

export const A = styled(Link)`
  ${headerFont};
  color: ${theme.color.black};
  text-decoration: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${theme.color.black};
  }
`;

export const NavA = styled(NavLink)`
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
