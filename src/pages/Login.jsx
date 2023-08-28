import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      alert("login success")
      localStorage.setItem("isLoggedIn", true);
      setTimeout(() => {
        navigate('/')
      }, 500);
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="lg:w-1/3 md:w-1/2 shadow-lg px-8 py-10 bg-white flex flex-col w-full border h-screen justify-center md:h-fit md:justify-normal">
        <h2 className="text-gray-900 text-lg md:text-2xl mb-1 font-medium title-font">
          Sign In
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600 text-sm md:text-lg">
          Sign In and manage your product wisely, Good Luck Today.
        </p>
        <form onSubmit={handleLogin}>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Register
          </button>
        </form>
        <p className="text-gray-500 mt-3 text-center text-xs md:text-lg">
          Don&apos;t have an account yet?{" "}
          <a
            onClick={() => navigate("/register")}
            className="text-blue font-semibold cursor-pointer"
          >
            Sign Up
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
