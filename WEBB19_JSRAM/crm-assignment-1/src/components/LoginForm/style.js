import styled from "styled-components";
import {
  Label,
  H1,
  Input,
  P,
  A,
  textFont,
  FlexRowCenter,
  headerFont,
} from "components/Shared";
import { OrangeButton } from "components/Button";

export const LoginFormContainer = styled.form`
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
  text-align: right;
`;

export const LoginFormLink = styled(A)`
  ${textFont};
  color: ${({ theme }) => theme.color.orange};
  font-style: italic;
  margin-left: 2px;
`;

export const LoginBottomWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const LoginFormSubmitBtn = styled(OrangeButton)`
  margin-top: 2rem;
`;

export const LoginError = styled(LoginFormGetAccount)`
  color: red;
  text-align: left;
  height: 25px;
`;

export const LoginTitle = styled(H1)`
  display: inline-block;
  font-size: 2.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.color.orange};
`;

export const SuccessfulActivation = styled(FlexRowCenter)`
  ${headerFont};
  color: #00d800;
  font-size: 1.15rem;
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 10px;
  text-transform: uppercase;
`;
