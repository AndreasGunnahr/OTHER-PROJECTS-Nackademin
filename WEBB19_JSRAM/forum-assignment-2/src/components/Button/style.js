import styled from "styled-components";
import { theme } from "constants/theme";
import { headerFont, textFont } from "components/Shared";

export const StyledButton = styled.button`
  ${headerFont};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  height: 55px;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  outline: none;
  border-radius: 5px;
  background: ${theme.color.blue};
  color: white;
  svg {
    margin-right: 0.5rem;
  }
`;
