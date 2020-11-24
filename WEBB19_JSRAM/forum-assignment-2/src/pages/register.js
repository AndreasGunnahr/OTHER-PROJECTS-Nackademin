import React, { useEffect } from "react";
import styled from "styled-components";
import PrimaryLayout from "layouts/PrimaryLayout";
import Form from "components/Form";
import {
  registerFormData,
  registerValidate,
} from "constants/registerFormRules";

import { useDispatch, useSelector } from "react-redux";
import { countriesAction } from "redux/actions/country.action";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  width: 100%;
`;

const Register = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
 
    dispatch(countriesAction.getAll());
  }, []);

  return (
    <PrimaryLayout col={1}>
      <Wrapper>
        {countries && (
          <Form
            title="Create a new account"
            typeName="register"
            data={registerFormData}
            validate={registerValidate}
          />
        )}
      </Wrapper>
    </PrimaryLayout>
  );
};

export default Register;
