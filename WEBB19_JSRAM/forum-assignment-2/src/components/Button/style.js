import styled from "styled-components";
import { theme } from "constants/theme";
import { headerFont } from "components/Shared";

export const StyledButton = styled.button`
  ${headerFont};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
  height: 60px;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  outline: none;
  border-radius: 5px;
  background: ${theme.color.blue};
  color: white;
  transition: 0.3s;
  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    transform: scale(1.01);
  }
`;
