
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const Loginvalidation = Yup.object({
    email: Yup.string().email("Invalid email format").required("Enter your email"),
    password: Yup.string().required("Password is required"),
  });

  return (
    
    <div className="flex justify-center items-center h-screen bg-light-green  "
   
  >
    <img
        src="src/assets/Screenshot 2024-11-28 100353.png"
        alt="logo"
        className=" h-20 w-20 justify-start"></img>

      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Loginvalidation}
          onSubmit={async (values, { setSubmitting }) => {

                     // {//  login validation //}
          
            try {
              const response = await axios.get(`http://localhost:3004/user`, {
                params: { email: values.email },
              });

              
              console.log(response);


            //  user is fetched userdetails


              const user = response.data[0];

              if (user && user.password === values.password) {
                alert("Successfully logged in!");

                localStorage.setItem('email',user.email)
                localStorage.setItem('name',user.username)
                navigate("/");
              } else {
                alert("Invalid email or password");
              }
            } catch (error) {
              console.error(error);
              alert("An error occurred while logging in");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 text-white font-semibold rounded-lg ${
                  isSubmitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-lime-200 hover:bg-blue-600"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
             
            </Form>
          )}
        </Formik>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Login;

