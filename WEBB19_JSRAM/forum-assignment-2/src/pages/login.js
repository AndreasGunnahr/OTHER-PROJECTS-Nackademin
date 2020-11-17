import React from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/actions/user.action";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Login Page
      <button
        onClick={() =>
          dispatch(
            login({ email: "pelle@willandskill.se", password: "pellesvanslos" })
          )
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
