import styled from "styled-components";
import {
  FlexRowCenter,
  headerFont,
  H1,
  P,
  Input,
  Label,
} from "components/Shared";
import { Button } from "components/Button";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
  pointer: cursor;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
  z-index: 2000;
  /* max-width: 950px; */
  /* min-height: 350px; */
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const Title = styled(H1)`
  display: inline-block;
  font-size: 1.75rem;
  text-transform: uppercase;
  /* border-bottom: 3px solid ${({ theme }) => theme.color.orange}; */
`;

export const ModalWrapper = styled.div`
  z-index: 100;
  background: ${({ theme }) => theme.color.white};
  position: relative;
  border-radius: 3px;
  width: 700px;
  height: 100%;
  padding: 2rem;
`;

export const Wrapper = styled(FlexRowCenter)`
  justify-content: space-between;
`;

export const CustomerLabel = styled(Label)`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const InputWrapper = styled.div``;

export const InputField = styled(Input)`
  font-size: 1rem;
  width: 100%;
`;

export const EditButton = styled(Button)`
  margin-top: 4rem;
  &:disabled {
    background: ${({ theme }) => theme.color.grey};
  }
`;

export const ErrorMessage = styled(P)`
  color: red;
  margin-top: 1rem;
  text-align: left;
  height: 25px;
`;

export const ModalGridWrapper = styled.div``;
