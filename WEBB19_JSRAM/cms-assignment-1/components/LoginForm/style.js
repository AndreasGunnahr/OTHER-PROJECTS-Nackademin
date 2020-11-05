import styled from "styled-components";
import { Label, Input, P, A, textFont } from "components/Shared";
import { OrangeButton } from "components/Button";

export const LoginFormContainer = styled.div`
  height: 700px;
  width: 700px;
  border-radius: 10px;
  padding: 1rem;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  :first-child {
    margin: 0;
  }
`;

export const LoginFormInput = styled(Input)``;

export const LoginFormLabel = styled(Label)``;

export const LoginFormGetAccount = styled(P)`
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 1rem;
  text-align: right;
`;

export const LoginFormLink = styled(A)`
  ${textFont};
  color: ${({ theme }) => theme.color.orange};
  font-style: italic;
  margin-left: 2px;
`;

export const LoginFormSubmitBtn = styled(OrangeButton)`
  margin-top: 2rem;
`;
