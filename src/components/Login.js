import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className=" p-10 rounded  w-full  max-w-lg">
        <div className="space-y-4">
          <div>
            <div className="text-6xl text-center font-bold text-indigo-500">
              webfast
            </div>
            <div className="text-center text-md font-thin mb-4">
              Members Portal
            </div>
          </div>
          <hr className="mb-4" />
          <label className="block mb-2 text-gray-800">Username</label>
          <input
            type="text"
            placeholder="user@domain.com"
            autoFocus
            required
            value={email}
            className="border-2 border-gray-200 w-full p-2 rounded outline-none focus:border-indigo-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailError}</p>
          <label className="block mb-2 text-gray-800">Password</label>
          <input
            type="password"
            required
            value={password}
            className="border-2 border-gray-200 w-full p-2 rounded outline-none focus:border-indigo-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{passwordError}</p>
          <div>
            {hasAccount ? (
              <>
                <button
                  className="block bg-indigo-500 hover:bg-indigo-600 transition text-white duration-300 w-full p-2 rounded"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
                <p className="text-gray-700 text-sm mt-4">
                  Don't have an account?
                  <span
                    className="text-sm text-indigo-500 ml-2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button
                  className="block bg-indigo-500 hover:bg-indigo-600 transition text-white duration-300 w-full p-2 rounded"
                  onClick={handleSignUp}
                >
                  Sign up
                </button>
                <p className="text-gray-700 text-sm mt-4">
                  Have an account?{" "}
                  <span
                    className="text-sm text-indigo-500 ml-2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
