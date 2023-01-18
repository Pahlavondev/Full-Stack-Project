import React, { useState } from "react";
import { icon } from "../constants/index";
import { Input } from "../ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="72" height="60" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

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

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
