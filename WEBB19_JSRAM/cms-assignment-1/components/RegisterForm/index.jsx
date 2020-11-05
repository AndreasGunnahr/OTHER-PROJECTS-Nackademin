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

const RegisterForm = () => {
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
        <RegisterFormLink href="/login">Sign in</RegisterFormLink>
      </RegisterFormLoginAccount>
      <RegisterFormSubmitBtn>Create account</RegisterFormSubmitBtn>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
