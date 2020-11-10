import Router from "next/router";
import { useContext, useState } from "react";
import { useGlobalContext } from "store/globalContext";
import Link from "next/link";
import {
  LoginFormContainer,
  LoginFormWrapper,
  LoginFormLabel,
  LoginFormInput,
  LoginFormGetAccount,
  LoginFormLink,
  LoginBottomWrapper,
  LoginFormSubmitBtn,
  LoginError,
} from "./style";
import { onLogin, getActiveUser } from "utilities/userServices";

const LoginForm = () => {
  const { state, dispatch } = useGlobalContext();

  const [loginInput, setLoginInput] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async () => {
    const { response, error } = await onLogin(loginInput);

    if (!error && response.token) {
      dispatch({ type: "SIGN_IN", token: response.token });
      Router.push("/home");
      return;
    }
    setLoginError("Invalid email or password");
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <LoginFormLabel htmlFor="email">Email</LoginFormLabel>
        <LoginFormInput
          name="email"
          placeholder="Enter a email"
          onChange={(e) =>
            setLoginInput({ ...loginInput, email: e.target.value })
          }
        ></LoginFormInput>
      </LoginFormWrapper>
      <LoginFormWrapper>
        <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
        <LoginFormInput
          name="password"
          type="password"
          placeholder="Enter a password"
          onChange={(e) =>
            setLoginInput({ ...loginInput, password: e.target.value })
          }
        ></LoginFormInput>
      </LoginFormWrapper>
      <LoginBottomWrapper>
        <LoginFormGetAccount>
          Don't have a account?
          <Link href="/register" passHref>
            <LoginFormLink>Sign up</LoginFormLink>
          </Link>
        </LoginFormGetAccount>
        <LoginError>{loginError}</LoginError>
      </LoginBottomWrapper>
      <LoginFormSubmitBtn onClick={handleSubmit}>Sign in</LoginFormSubmitBtn>
    </LoginFormContainer>
  );
};

export default LoginForm;
