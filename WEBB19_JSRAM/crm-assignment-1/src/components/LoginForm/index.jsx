import { useState } from "react";
import { useGlobalContext } from "store/globalContext";
import { getActiveUser, onLogin } from "utilities/userServices";
import { useHistory } from "react-router-dom";

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
  LoginTitle,
  SuccessfulActivation,
} from "./style";

const LoginForm = ({ activation }) => {
  const history = useHistory();
  const { dispatch } = useGlobalContext();

  const [loginInput, setLoginInput] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { response, error } = await onLogin(loginInput);

    if (!error && response.token) {
      const user = await getActiveUser(response.token);
      const activeUser = {
        firstName: user.response.firstName,
        lastName: user.response.lastName,
        email: user.response.email,
      };

      dispatch({ type: "SIGN_IN", token: response.token, user: activeUser });
      history.push("/customers");
      return;
    }
    setLoginError("Invalid email or password");
  };

  return (
    <LoginFormContainer>
      <LoginTitle>Sign in</LoginTitle>
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
        <LoginError>{loginError}</LoginError>
        <LoginFormGetAccount>
          Don't have a account?
          <LoginFormLink to="/register">Sign up</LoginFormLink>
        </LoginFormGetAccount>
      </LoginBottomWrapper>
      <LoginFormSubmitBtn onClick={handleSubmit}>Sign in</LoginFormSubmitBtn>

      <SuccessfulActivation>{activation}</SuccessfulActivation>
    </LoginFormContainer>
  );
};

export default LoginForm;
