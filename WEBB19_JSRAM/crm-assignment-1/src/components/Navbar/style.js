import styled from "styled-components";
import { NavA, P, A, FlexRowCenter } from "components/Shared";
import { OrangeLinkButton, OrangeButton } from "components/Button";

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
  color: ${({ open, theme }) => (open ? theme.color.white : "")};
`;

export const LinkWrapper = styled(FlexRowCenter)`
  display: none;
  margin-right: -4rem;
  @media (min-width: 1023px) {
    display: flex;
  }
`;

export const NavLink = styled(NavA)`
  margin-right: 2rem;
  text-transform: uppercase;

  &:last-child {
    margin: 0;
  }
`;

export const LoginBtn = styled(OrangeLinkButton)`
  width: 200px;
  text-decoration: underline;
  height: 45px;
  font-size: 1rem;
  display: none;
  @media (min-width: 1023px) {
    display: flex;
  }
`;

export const LogOutBtn = styled(OrangeButton)`
  width: 200px;
  text-decoration: underline;
  height: 45px;
  font-size: 1rem;
`;

export const SignedInUser = styled(P)`
  font-size: 0.85rem;
  margin-right: 2rem;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Wrapper = styled(FlexRowCenter)`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
  }
`;
