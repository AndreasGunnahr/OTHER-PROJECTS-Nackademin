import {
  LoginFormContainer,
  LoginFormWrapper,
  LoginFormLabel,
  LoginFormInput,
  LoginFormGetAccount,
  LoginFormLink,
  LoginFormSubmitBtn,
} from "./style";

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <LoginFormLabel htmlFor="username">Username</LoginFormLabel>
        <LoginFormInput
          name="username"
          placeholder="Enter a username"
        ></LoginFormInput>
      </LoginFormWrapper>
      <LoginFormWrapper>
        <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
        <LoginFormInput
          name="password"
          placeholder="Enter a password"
        ></LoginFormInput>
      </LoginFormWrapper>
      <LoginFormGetAccount>
        Don't have a account?
        <LoginFormLink href="/register">Sign up</LoginFormLink>
      </LoginFormGetAccount>
      <LoginFormSubmitBtn>Sign in</LoginFormSubmitBtn>
    </LoginFormContainer>
  );
};

export default LoginForm;
