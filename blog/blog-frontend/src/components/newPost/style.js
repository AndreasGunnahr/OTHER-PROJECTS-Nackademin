import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: beige;
  width: 100%;
  max-width: 700px;
  padding: 2rem;
`;

export const FormTitle = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const FormInput = styled.input`
  height: 50px;
  font-size: 1.25rem;
  padding-left: 5px;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const FormTextArea = styled.textarea`
  height: 150px;
  font-size: 1.25rem;
  padding: 5px;
`;

export const ActionButton = styled.button`
  height: 50px;
  width: 200px;
  background: lightblue;
  text-transform: uppercase;
  font-size: 1rem;
  border: none;
  margin-top: 2rem;
`;
