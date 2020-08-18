import styled from "styled-components";
import { Form } from "components/newPost/style";
export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const UpdateForm = styled(Form)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: beige;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  height: 50px;
  width: 200px;
  background: red;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  border: none;
  margin-top: 2rem;
`;
