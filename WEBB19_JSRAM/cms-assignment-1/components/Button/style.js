import styled from "styled-components";
import { headerFont } from "components/Shared";
import theme from "constants/theme";

export const StyledButton = styled.a`
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
`;

export const StyledOrangeButton = styled(StyledButton)`
  background: ${theme.color.orange};
  color: ${theme.color.white};
`;
