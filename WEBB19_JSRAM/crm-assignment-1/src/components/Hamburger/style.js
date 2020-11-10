import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  z-index: 10000;
  @media screen and (min-width: 1023px) {
    display: none;
  }

  div {
    :nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(9px) rotateZ(45deg)" : ""};
      background-color: ${({ isOpen, theme }) =>
        isOpen ? theme.color.white : ""};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-9px) rotateZ(-45deg)" : ""};
      background-color: ${({ isOpen, theme }) =>
        isOpen ? theme.color.white : ""};
    }
  }
`;

export const Lines = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${({ theme }) => theme.color.black};
  margin: 5px 0;
  transition: 0.4s;
  border-radius: 5px;
  :nth-child(2) {
    width: 25px;
    margin-left: auto;
  }
`;
