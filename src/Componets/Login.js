import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="w-ful h-full flex flex-col items-center">
        <div className="p-5 border-b border-solid border-gray-300 w-full flex justify-center ">
          <Icon icon="logos:spotify" width={150} />
        </div>
        <div className="w-1/3 py-10 flex items-center  flex-col">
          <div className="font-bold mb-10">To continue, login to Spotify</div>
          <div className="flex py-4 flex-col space-y-2 w-full">
            <h2 className="font-bold">Email address or username</h2>
            <input
              type="text"
              className="p-2 border border-gray-400 border-solid rounded placeholder-gray"
              placeholder="Email address or username"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <h2 className="font-bold">Password</h2>
            <input
              type="password"
              className="p-2 border border-gray-400 border-solid rounded placeholder-gray"
              placeholder="Password"
            />
          </div>
          <div className="w-full flex items-center justify-end my-8">
            <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
              LOG IN
            </button>
          </div>
          <div className="w-full border border-solid border-gray-300 "></div>
          <div className="my-6 font-semibold text-lg ">
            Don't have an account
          </div>
          <div className="border border-gray-400 text-gray-600 font-bold w-full flex items-center justify-center py-4 rounded-full">
            <Link to="/Signup">SIGN UP FOR SPOTIFY</Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
