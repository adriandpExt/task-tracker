import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { Textfield } from "~/components";
import { useLogin } from "~/queries/login";
import { useAuth } from "~/hooks/useAuth";
import { validationSchema } from "./utils";

const Login = () => {
  const { loginAuth } = useAuth();
  const loginMutation = useLogin();

  const handleSubmitLogin = async (values, { setSubmitting }) => {
    try {
      const response = await loginMutation.mutateAsync(values);

      if (response && response.token) {
        const { token, email } = response;
        loginAuth(token, email);
        toast.success("Login successful!");
      } else {
        toast.error("Incorrect email or password");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const loginForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: handleSubmitLogin,
  });

  return (
    <main className="text-center h-full p-10 flex justify-center bg-gray-300">
      <form
        className="space-y-5 pt-0 px-10 pb-10 border-4 w-full lg:w-96 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-xl text-center"
        onSubmit={loginForm.handleSubmit}
      >
        <div className="text-center">
          <img
            src="https://r2.erweima.ai/imgcompressed/compressed_723ad398c6d2751f92e24af448cb22aa.webp"
            alt="task-image"
            className="mx-auto max-w-full h-auto"
          />
          <p className="text-blue-950 font-bold text-3xl">TASK MANAGEMENT</p>
        </div>

        <Textfield
          name="email"
          type="email"
          placeholder="Email"
          iconName={"ic_email"}
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          error={loginForm.touched.email && Boolean(loginForm.errors.email)}
          helperText={loginForm.touched.email && loginForm.errors.email}
          isSvg
        />
        <Textfield
          name="password"
          type="password"
          placeholder="Password"
          iconName={"ic_password"}
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          error={
            loginForm.touched.password && Boolean(loginForm.errors.password)
          }
          helperText={loginForm.touched.password && loginForm.errors.password}
          isSvg
        />

        <button
          className="btn btn-outline hover:btn-primary w-full text-lg border-red-950 border-2"
          type="submit"
        >
          LOGIN
        </button>

        <div className="text-center flex flex-col gap-5">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/register">Don&apos;t have an account?</Link>
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

export default Login;
