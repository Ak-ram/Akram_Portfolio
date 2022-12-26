import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ isLogging, setIsLogging }) => {
  const accessTokenInputFeild = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [accessTokenVal, setAccessTokenVal] = useState("");
  const [colorState, setColorState] = useState("");
  
  const handleColorState = () => {
    if (accessTokenVal === process.env.REACT_APP_GITHUB_ACCESS_TOKEN) {
      setColorState("green");
    } else {
      setColorState("red");
    
    }
  };

  // 🐛 Bug: accessTokenVal is async
  // Bug: doesn't update the colorState value immediately or sync with accessTokenVal
  // ✔ Solve: Use useEffect hock
  
  useEffect(() => {
    handleColorState();
    accessTokenInputFeild.current!.focus();
  }, [accessTokenVal]);
  const handleInputValue = (e) => {
    handleColorState();
    setAccessTokenVal(e.currentTarget.value);
  };
  const handleSigningInProcess = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (accessTokenVal === process.env.REACT_APP_GITHUB_ACCESS_TOKEN) {
      navigate("/dashboard");
      setIsLogging(true);
    } else {
        setIsLogging(false);
      console.log("disconnecting");
    }
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 w-full absolute top-0 left-0 z-10 h-full flex">
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#d"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Access Token
                  </label>
                  <input
                    ref={accessTokenInputFeild}
                    type="password"
                    name="password"
                    id="password"
                    value={accessTokenVal}
                    onChange={(e) => handleInputValue(e)}
                    placeholder="gh**************************************"
                    className={`border border-gray-300 sm:text-sm text-${colorState}-400 rounded-lg focus:ring-${colorState}-600 focus:border-${colorState}-600 block w-full p-2.5 dark:bg-gray-700 dark:border-${colorState}-600 dark:placeholder-gray-400 dark:text-${colorState}-600 dark:focus:ring-${colorState}-500 dark:focus:border-${colorState}-500`}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        disabled
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#d"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot Acess Token?
                  </a>
                </div>
                <button
                  type="submit"
                  className={`w-full text-white dark:bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  onClick={(e) => handleSigningInProcess(e)}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an access token yet?{" "}
                  <a
                    href="https://github.com/settings/tokens/new"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Create one
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;