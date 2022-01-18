import React, { useState } from "react";
import { Input, Button } from "antd";
//import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../Redux/Action/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("SUCCESS");
    console.log("formdata value is ", formdata);
    dispatch(login(email, password));
    navigate("/home");
  };

  return (
    <div>
      <div
        style={{
          width: "40%",
          height: "100vh",
          backgroundColor: "#729B8E",
          float: "left",
        }}
      ></div>
      <div>
        <img
          src="/assets/login-r.png"
          alt="Login Image"
          style={{
            width: 500,
            height: 500,
            marginLeft: "-200px",
            paddingTop: "100px",
            float: "left",
          }}
        />
      </div>

      <div
        style={{
          paddingLeft: "200px",
          paddingTop: "200px",
        }}
      >
        <h1>Login </h1>
        <Input
          placeholder="Email"
          style={{ width: "300px", height: "30px", marginBottom: "20px" }}
          name="email"
          value={email}
          onChange={(e) => changer(e)}
        />{" "}
        <br />
        <Input
          placeholder="Password"
          style={{ width: "300px", height: "30px", marginBottom: "20px" }}
          type="password"
          name="password"
          value={password}
          onChange={(e) => changer(e)}
        />{" "}
        <br />
        <Button
          type="primary"
          block
          style={{
            marginLeft: "50px",
            width: "200px",
            height: "30px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
