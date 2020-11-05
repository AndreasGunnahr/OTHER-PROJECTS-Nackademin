import styled from "styled-components";
import { Label, Input, P, A, textFont } from "components/Shared";
import { OrangeButton } from "components/Button";

export const RegisterFormContainer = styled.div`
  height: 700px;
  width: 700px;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const RegisterFormCol = styled.div`
  flex: 50%;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  :first-child {
    margin: 0;
  }
`;

export const RegisterFormInput = styled(Input)``;

export const RegisterFormLabel = styled(Label)``;

export const RegisterFormLoginAccount = styled(P)`
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 1rem;
  text-align: right;
`;

export const RegisterFormLink = styled(A)`
  ${textFont};
  color: ${({ theme }) => theme.color.orange};
  font-style: italic;
  margin-left: 2px;
`;

export const RegisterFormSubmitBtn = styled(OrangeButton)`
  margin-top: 2rem;
`;
