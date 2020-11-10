import styled from "styled-components";
import { headerFont } from "components/Shared";
import theme from "constants/theme";
import Link from "next/link";

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
`;

export const StyledOrangeButton = styled(StyledButton)`
  background: ${theme.color.orange};
  color: ${theme.color.white};
`;
