import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleApi = () => {
    console.log({ email, password });
    axios
      .post("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        navigate("/Form");

        const mytoken = result.data.authToken;
        console.log(mytoken);
        sessionStorage.setItem("JWT", mytoken);
        console.log("My JWT is", sessionStorage.getItem("JWT"));

        // remove JWT from storage
        sessionStorage.removeItem("JWT");

        // clear whole storage
        sessionStorage.clear();

        alert("success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  return (
    <div>
      <div className="App">
        Email : <input value={email} onChange={handleEmail} type="text" />{" "}
        <br />
        Password :
        <input value={password} onChange={handlePassword} type="text" /> <br />
        <button onClick={handleApi}>Login</button>
      </div>
    </div>
  );
};

export default Login;
