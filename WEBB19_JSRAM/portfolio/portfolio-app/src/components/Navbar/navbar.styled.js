import styled from "styled-components"

import { P, A, FlexRowCenter } from "components/Shared"
import { OrangeLinkButton, OrangeButton } from "components/Button"

export const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  background: transparent;
`

export const Logo = styled(A)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10000;
  font-size: 2rem;
  /* text-transform: uppercase; */
  /* color: ${({ open, theme }) => (open ? theme.color.white : "")}; */
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
  padding: 1rem;
  margin-right: 2rem;
  &:after {
    content: "";
    position: absolute;
    margin: -10px;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: ${({ theme }) =>
      theme.color.background}; /* to see where it is */
  }
`

export const LinkWrapper = styled(FlexRowCenter)`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
  }
`

export const NavLink = styled(A)`
  margin-right: 2rem;
  text-transform: uppercase;
  font-size: 1.25rem;

  &:last-child {
    margin: 0;
  }
`

export const LoginBtn = styled(OrangeLinkButton)`
  width: 200px;
  text-decoration: underline;
  height: 45px;
  font-size: 1rem;
  display: none;
  @media (min-width: 1023px) {
    display: flex;
  }
`

export const LogOutBtn = styled(OrangeButton)`
  width: 200px;
  text-decoration: underline;
  height: 45px;
  font-size: 1rem;
`

export const SignedInUser = styled(P)`
  font-size: 0.85rem;
  margin-right: 2rem;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`

export const Wrapper = styled(FlexRowCenter)`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
  }
`
