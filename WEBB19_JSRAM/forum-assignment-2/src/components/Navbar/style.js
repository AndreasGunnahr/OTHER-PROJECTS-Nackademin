import styled from "styled-components";
import { Input, NavA, A, FlexRowCenter } from "components/Shared";
import { Button } from "components/Button";

export const NavContainer = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: white;
  z-index: 1000;
  box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
`;

export const Logo = styled(A)`
  z-index: 10000;
  font-size: 2rem;
  text-transform: uppercase;
  color: ${({ open, theme }) => (open ? theme.color.white : "")};
`;

export const SearchWrapper = styled(FlexRowCenter)`
  display: flex;
`;

export const SearchField = styled(Input)`
  background: ${({ theme }) => theme.color.white};
  width: 500px;
  font-family: "Raleway", FontAwesome, sans-serif;
`;

export const NavLink = styled(NavA)`
  margin-right: 1.5rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  &:last-child {
    margin: 0;
  }
`;

export const LoginBtn = styled.button`
  width: 200px;
  height: 45px;
  font-size: 1rem;
  background: ${({ theme }) => theme.color.white};
  border: none;
  cursor: pointer;
  /* display: none; */
`;

export const LogOutBtn = styled(Button)`
  width: 200px;
  height: 45px;
  font-size: 1rem;
  margin-left: 2rem;
`;

export const Wrapper = styled(FlexRowCenter)`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
  }
`;
