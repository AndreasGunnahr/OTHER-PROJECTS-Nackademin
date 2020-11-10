import styled from "styled-components";
import {
  Label,
  Input,
  H1,
  P,
  A,
  textFont,
  FlexRowCenter,
  headerFont,
} from "components/Shared";
import { OrangeButton } from "components/Button";

export const RegisterFormContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 900px;
  border-radius: 10px;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const RegisterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 2rem; */
  :first-child {
    margin: 0;
  }
`;

export const RequiredStar = styled(P)`
  ${headerFont};
  font-size: 1.25rem;
  color: red;
  margin-left: 5px;
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
  width: 100%;
`;

export const RegisterTitle = styled(H1)`
  display: inline-block;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  border-bottom: 3px solid ${({ theme }) => theme.color.orange};
`;

export const Wrapper = styled(FlexRowCenter)`
  justify-content: space-between;
`;

export const RegisterError = styled(P)`
  color: red;
  margin-top: 1rem;
  text-align: left;
  height: 25px;
`;

export const SuccessfulRegister = styled(FlexRowCenter)`
  ${headerFont};
  color: #00d800;
  font-size: 1.15rem;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
  text-transform: uppercase;
`;
