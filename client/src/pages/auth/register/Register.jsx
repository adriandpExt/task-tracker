import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Textfield } from "~/components";
import { useRegister } from "~/queries/auth";

import { validationSchema } from "./utils";

const Register = () => {
  const register = useRegister();
  const handleSubmitRegister = async (values) => {
    try {
      const response = await register.mutateAsync(values);

      if (response) toast.success("Registration successful!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const registerForm = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmitRegister,
  });

  return (
    <main className="text-center h-full lg:h-full p-10 flex justify-center bg-gray-300">
      <form
        className="space-y-5 pt-0 px-10 pb-10 border-4 w-full lg:w-96 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-xl text-center"
        onSubmit={registerForm.handleSubmit}
      >
        <div className="text-center p-2">
          <img
            src="https://www.9ine.com/hubfs/Website%20Images/img/Bird%E2%80%99s%20Eye%20View.png"
            alt=""
            className="mx-auto max-w-full h-auto"
          />
          <p className="text-blue-950 font-bold text-3xl">REGISTER</p>
        </div>

        <Textfield
          name="fullname"
          type="text"
          placeholder="Fullname"
          iconName={"ic_user"}
          value={registerForm.values.fullname}
          onChange={registerForm.handleChange}
          error={
            registerForm.touched.fullname &&
            Boolean(registerForm.errors.fullname)
          }
          helperText={
            registerForm.touched.fullname && registerForm.errors.fullname
          }
          isSvg
        />
        <Textfield
          name="email"
          type="email"
          placeholder="Email"
          iconName={"ic_email"}
          value={registerForm.values.email}
          onChange={registerForm.handleChange}
          error={
            registerForm.touched.email && Boolean(registerForm.errors.email)
          }
          helperText={registerForm.touched.email && registerForm.errors.email}
          isSvg
        />
        <Textfield
          name="password"
          type="password"
          placeholder="Password"
          iconName={"ic_password"}
          value={registerForm.values.password}
          onChange={registerForm.handleChange}
          error={
            registerForm.touched.password &&
            Boolean(registerForm.errors.password)
          }
          helperText={
            registerForm.touched.password && registerForm.errors.password
          }
          isSvg
        />
        <Textfield
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          iconName={"ic_password"}
          value={registerForm.values.confirmPassword}
          onChange={registerForm.handleChange}
          error={
            registerForm.touched.confirmPassword &&
            Boolean(registerForm.errors.confirmPassword)
          }
          helperText={
            registerForm.touched.confirmPassword &&
            registerForm.errors.confirmPassword
          }
          isSvg
        />

        <button
          className="btn btn-outline hover:btn-primary w-full text-lg border-red-950 border-2"
          type="submit"
        >
          REGISTER
        </button>

        <div className="text-center mt-3">
          <Link to="/">Already have an account? Login</Link>
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};

export default Register;
