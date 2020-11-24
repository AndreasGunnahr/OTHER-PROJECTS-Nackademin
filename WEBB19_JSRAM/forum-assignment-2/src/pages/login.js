import React from "react";
import styled from "styled-components";
import PrimaryLayout from "layouts/PrimaryLayout";
import Form from "components/Form";
import { loginFormData, loginValidate } from "constants/loginFormRules";
import { H1 } from "components/Shared";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  width: 100%;
`;

const CreatedTitle = styled(H1)`
  color: ${({ code }) => (code === 400 ? "red" : "green")};
  font-size: 1.5rem;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
`;

const Login = () => {
  const message = useSelector((state) => state.alert?.message);
  const code = useSelector((state) => state.alert?.code);

  return (
    <PrimaryLayout col={1}>
      <Wrapper>
        <Form
          title="Sign in"
          typeName="login"
          data={loginFormData}
          validate={loginValidate}
        />
        <CreatedTitle code={code}>{message && message}</CreatedTitle>
      </Wrapper>
    </PrimaryLayout>
  );
};

export default Login;
