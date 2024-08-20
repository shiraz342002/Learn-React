import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    console.log("Creating Your account....");

    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    try {
      let response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error('Error:', error);
    }
      //To simulate delay 
      // await delay(3);
    
      //For authorization
    
      // if (data.username !== "shiraz") {
      //   console.log("Registration Failed");
      //   setError("auth", { message: "Invalid username or password" });
      //   return;
      // } else if (data.email === "ali@gmail.com") {
      //   console.log("Registration Failed");
      //   setError("blocked", { message: "You are blocked from the website" });
      //   return;
      // }
  };
    
  
  

  const handleFieldChange = () => {
    clearErrors("auth");
    clearErrors("blocked");
  };

  return (
    <>
      {isSubmitting && <div className="loadingMessage">Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            placeholder="username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
              maxLength: {
                value: 12,
                message: "Username must not exceed 12 characters",
              },
            })}
            className="input"
            onChange={handleFieldChange}
          />
          {errors.username && <div className="error">{errors.username.message}</div>}

          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 3,
                message: "Email must be longer than 3 characters",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is not valid",
              },
            })}
            className="input"
            onChange={handleFieldChange}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}

          <input
            placeholder="password"
            {...register("password", { required: "Password is required" })}
            className="input"
            onChange={handleFieldChange}
          />
          {errors.password && <div className="error">{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" className="submitButton" />
          {errors.auth && <div className="error">{errors.auth.message}</div>}
          {errors.blocked && <div className="error">{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  );
}
