import styled from "styled-components";
import { A, FlexRowCenter } from "components/Shared";
import { OrangeButton } from "components/Button";

export const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: transparent;
  border-bottom: 1px solid lightgrey;
`;

export const Logo = styled(A)`
  z-index: 10000;
  font-size: 2rem;
  text-transform: uppercase;
  color: ${({ isOpen, theme }) => (isOpen ? theme.color.white : "")};
`;

export const LinkWrapper = styled(FlexRowCenter)`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const NavLink = styled(A)`
  margin-right: 2rem;
  text-transform: uppercase;
  &:last-child {
    margin: 0;
  }
`;

export const LoginBtn = styled(OrangeButton)`
  width: 200px;
  text-decoration: underline;
  @media (max-width: 1023px) {
    display: none;
  }
`;
