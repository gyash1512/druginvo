import React from "react";

import { withFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./FormButton";
import axios from "axios";
function sendData(values, props) {
      axios.post("/.netlify/functions/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        props.props.setAlert({
          type: "success",
          message: "Welcome Back " + user.full_name + "!",
        });
      })
      .catch(() => {
        props.props.setAlert({
          type: "error",
          message: "Invalid email address or Password",
        });
      });
  }
  
const schema = Yup.object().shape({
    email : Yup.string().required("Please fill your email"),
    password : Yup.string().required("Please enter your password"),
})
function Login({touched,errors,handleChange,handleBlur,handleSubmit}) {
    return (
        <div className="bg-[url('/timepass.jpeg')] bg-cover flex justify-end h-screen">
            
            <div className="flex flex-col gap-4 px-12 py-8 self-center border-4 rounded-md border-black mr-48">
            <h1 className="self-center text-gray-600 text-3xl">DrugsInvo</h1>
            <h2 className="text-2xl bold">Sign in</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                <Input name="email" id="email" type="email" label="Email" onChange={handleChange} onBlur={handleBlur} touched={touched.email} error={errors.email} />
                <Link className="text-blue-600 self-end" to="/forgot">Forget Password</Link>
                <Input name="password" id="password" type="password" label="Passwrod" onChange={handleChange} onBlur={handleBlur} touched={touched.password} error ={errors.password} />
                <Button name="Log In" />
                <p className="self-center">New User?Create Acccount <Link className="text-blue-600" to="/sign_up">Sign up</Link></p>
            </form>

            </div>
            

        </div>
    )
}
const myHOC = withFormik({
    initialValues: {
        email: "",
        password: "",
    },
    handleSubmit: sendData,
    validationSchema: schema,
})
export default myHOC(Login);
