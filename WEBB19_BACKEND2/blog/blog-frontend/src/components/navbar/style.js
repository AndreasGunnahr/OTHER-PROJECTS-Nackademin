import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 65px;
  background: beige;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: black;
  font-weight: 900;
  text-transform: uppercase;
  padding: 1rem;
  &:last-child {
    margin: 0;
  }
`;
