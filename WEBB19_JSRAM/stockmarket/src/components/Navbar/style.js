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
  margin-right: 2rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  :last-child {
    margin: 0;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 2rem;
`;
