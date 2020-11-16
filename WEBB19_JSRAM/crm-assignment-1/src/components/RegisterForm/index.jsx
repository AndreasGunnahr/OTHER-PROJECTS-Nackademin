import { useState } from "react";
import { onRegister } from "utilities/userServices";
import data from "./data";

import {
  RegisterFormContainer,
  RegisterFormWrapper,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterFormLoginAccount,
  RegisterFormLink,
  RegisterFormSubmitBtn,
  RegisterWrapper,
  Wrapper,
  RegisterError,
  RegisterTitle,
  RequiredStar,
  SuccessfulRegister,
} from "./style";

const RegisterForm = () => {
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [registerInput, setRegisterInput] = useState({
    email: null,
    organisationKind: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { organisationKind, password, email } = registerInput;

    if (!email) {
      return setRegisterError("Enter a email");
    } else if (!password) {
      return setRegisterError("Enter a password");
    } else if (!organisationKind) {
      return setRegisterError("Enter a organisation number between 1-3");
    }

    const { response, error } = await onRegister(registerInput);
    if (!error && response) {
      if (response.hasOwnProperty("email")) {
        setRegisterSuccess(true);
      }
    }
  };

  return (
    <RegisterFormContainer>
      <RegisterTitle>Create account</RegisterTitle>
      <RegisterWrapper>
        {data.map((customerItem, index) => (
          <RegisterFormWrapper key={index}>
            <RegisterFormLabel htmlFor={customerItem.name}>
              {customerItem.name}
              <RequiredStar> {customerItem.required}</RequiredStar>
            </RegisterFormLabel>
            <RegisterFormInput
              name={customerItem.type}
              onChange={(e) =>
                setRegisterInput({
                  ...registerInput,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder={"Enter a " + customerItem.name.toLowerCase()}
              type={customerItem.name === "Password" ? "password" : ""}
            ></RegisterFormInput>
          </RegisterFormWrapper>
        ))}
      </RegisterWrapper>
      <Wrapper>
        <RegisterError>{registerError}</RegisterError>
        <RegisterFormLoginAccount>
          Have a account?
          <RegisterFormLink to="/login"> Sign in</RegisterFormLink>
        </RegisterFormLoginAccount>
      </Wrapper>
      <RegisterFormSubmitBtn onClick={handleSubmit}>
        Create account
      </RegisterFormSubmitBtn>
      {registerSuccess && (
        <SuccessfulRegister>
          Successful register - Check your email to validate your account
        </SuccessfulRegister>
      )}
    </RegisterFormContainer>
  );
};

export default RegisterForm;
