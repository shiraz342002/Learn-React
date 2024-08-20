import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input type="email" placeholder="email"
         {...register("email",
         {required:"email is required",
         minLength:{
          value:3,message:"email must be longer than 3 characters"
         },
        
         pattern:{
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message:"email is not valid"
         }
         }
         )} />


        <input
          placeholder="username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 8,
              message: "Username must not exceed 8 characters",
            },
          })}
          className="input"
        />
        {/* Error message for username */}
        {errors.username && (
          <div className="error">{errors.username.message}</div>
        )}
        <br />
        <input
          placeholder="password"
          {...register("password", { required: "Password is required" })}
          className="input"
        />
        {/* Error message for password */}
        {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}
        <br />
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}
