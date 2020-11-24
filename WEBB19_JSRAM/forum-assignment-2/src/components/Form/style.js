import styled from "styled-components";
import {
  P,
  headerFont,
  Input,
  Label,
  A,
  textFont,
  H1,
} from "components/Shared";
import { Button } from "components/Button";

export const FormContainer = styled.form`
  width: 100%;
`;

export const FormItem = styled.div`
  margin-top: 2rem;
`;

export const FormLabel = styled(Label)`
  text-transform: uppercase;
`;

export const FormInput = styled(Input)`
  width: 100%;
  background: ${({ theme, typeName }) =>
    typeName === "reply" ? theme.color.white : "white"};
`;

export const RequiredStar = styled(P)`
  ${headerFont};
  font-size: 1rem;
  color: red;
  margin-left: 2px;
`;

export const FormActionBtn = styled(Button)`
  margin-top: 1rem;
`;

export const FormError = styled(P)`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  height: 1px;
  font-size: 1rem;
  color: red;
  font-weight: 600;
`;

export const DescriptionText = styled(P)`
  margin-top: 0.75rem;
  text-align: right;
`;

export const ActionText = styled(A)`
  ${textFont};
  color: ${({ theme }) => theme.color.blue};
  margin-left: 5px;
  font-style: italic;
`;

export const FormTitle = styled(H1)`
  font-size: 2.5rem;
  margin-top: 2rem;
`;
