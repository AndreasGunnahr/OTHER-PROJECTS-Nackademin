import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 70px;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  text-transform: uppercase;
  font-weight: 900;
  :last-child {
    margin: 0;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 2rem;
`;

export const NrOfItems = styled.h1`
  background: white;
  color: black;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
`;
