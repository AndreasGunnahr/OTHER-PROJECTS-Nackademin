import styled from "styled-components";

export const Table = styled.table`
  height: 100%;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  border-collapse: collapse;
`;

export const Row = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.color.grey};
    border-radius: 10px;
    cursor: pointer;
    td {
      :first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      :last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;

export const Data = styled.td`
  text-align: center;
  padding: 1rem;
  font-weight: 400;
`;

export const Body = styled.tbody``;

export const Header = styled.th`
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 2rem;
  font-size: 1.25rem;
  position: -webkit-sticky; // this is for all Safari (Desktop & iOS), not for Chrome
  position: sticky;
  top: 0;
  z-index: 5;
  background: ${({ theme }) => theme.color.grey};
  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  :last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
