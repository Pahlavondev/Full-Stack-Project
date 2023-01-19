import React, { useState } from "react";
import { icon } from "../constants/index";
import { Input } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
} from "../slice/auth";

import AuthService from "../service/auth";
import { ValidationError } from "./";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
    const user = { email, password };

    try {
      const response = await AuthService.userLogin(user);
      dispatch(loginUserSuccess(response.user));
    } catch (error) {
      dispatch(loginUserFailure(error.response.data.errors));
    }
  };

  return (
    <div className="container text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="72" height="60" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <ValidationError />
          <Input
            label={"Email Address"}
            type={"email"}
            state={email}
            setState={setEmail}
          />

          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="w-100 btn btn-lg btn-primary"
            onClick={loginHandler}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
