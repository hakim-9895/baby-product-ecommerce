import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const Signupvalidation = Yup.object({
    username: Yup.string().min(5).required("Enter your name"),
    email: Yup.string().email("Enter a valid email").required("Enter your email"),
    password: Yup.string().min(5).required("Password is required"),
  });

  const checkEmailexist = async (email) => {
    try {
      const respond = await axios.get(
        `http://localhost:3004/user/?email=${email}`
      );
      if (respond.data.length > 0) {
        return "Email already exists";
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-[url('src/assets/pexels-pixabay-208189.jpg')] bg-cover bg-center">


      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Register
        </h2>
        <Formik
          validationSchema={Signupvalidation}
          initialValues={{
            username: "",
            email: "",
            password: "",
            cart:[],
            order:[],
            status:true
            

          }}
       
          onSubmit={async (values, { setSubmitting }) => {
                   

            try {
              const emailerror = await checkEmailexist(values.email);
              if (emailerror) {
                alert(emailerror);
                setSubmitting(false);
                return;
              }
              const response = await axios.post(
                "http://localhost:3004/user",
                values
              );
              console.log("this is response after register ",response);
              navigate("/login");
            } catch (error) {
              console.error("Error in response", error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              
              <div>
                <label
                  htmlFor="username"
                  className="block text-gray-600 font-medium"
                >
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-600 font-medium"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
