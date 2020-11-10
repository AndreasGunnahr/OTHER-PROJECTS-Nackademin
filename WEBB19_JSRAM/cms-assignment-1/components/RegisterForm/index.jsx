import { useContext } from "react";
import GlobalContext from "store/globalContext";

import {
  RegisterFormContainer,
  RegisterFormWrapper,
  RegisterFormCol,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterFormLoginAccount,
  RegisterFormLink,
  RegisterFormSubmitBtn,
} from "./style";

import data from "./data";
import Link from "next/link";

const RegisterForm = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state);
  return (
    <RegisterFormContainer>
      {data.map((customerItem, index) => (
        <RegisterFormWrapper key={index}>
          <RegisterFormLabel htmlFor={customerItem.name}>
            {customerItem.name}
          </RegisterFormLabel>
          <RegisterFormInput
            name={customerItem.name}
            placeholder={"Enter a " + customerItem.name.toLowerCase()}
          ></RegisterFormInput>
        </RegisterFormWrapper>
      ))}
      <RegisterFormLoginAccount>
        Have a account?
        <Link href="/login" passHref>
          <RegisterFormLink>Sign in</RegisterFormLink>
        </Link>
      </RegisterFormLoginAccount>
      <RegisterFormSubmitBtn>Create account</RegisterFormSubmitBtn>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
