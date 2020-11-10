import styled from "styled-components";
import theme from "constants/theme";
import { headerFont } from "components/Shared";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  ${headerFont};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
  height: 55px;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  outline: none;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  ${headerFont};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
  height: 55px;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  outline: none;
  border-radius: 10px;
`;

export const StyledOrangeButton = styled(StyledButton)`
  background: ${theme.color.orange};
  color: ${theme.color.white};
`;

export const StyledOrangeLinkButton = styled(StyledLink)`
  background: ${theme.color.orange};
  color: ${theme.color.white};
`;
