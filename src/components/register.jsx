import React, { useEffect, useState } from "react";
import { icon } from "../constants/index";
import { Input } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import {
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());

    const user = {
      username: name,
      email: email,
      password: password,
    };

    try {
      const response = await AuthService.userRegister(user);
      dispatch(registerUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      dispatch(registerUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="container text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="72" height="60" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <ValidationError />

          <Input label={"Username"} state={name} setState={setName} />
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
            onClick={registerHandler}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
