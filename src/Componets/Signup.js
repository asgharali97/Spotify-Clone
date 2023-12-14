import React from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
       <div className="w-ful h-full flex flex-col items-center">
        <div className="p-4 w-full flex justify-center ">
          <Icon icon="logos:spotify" width={150} />
        </div>
        <div className="w-1/3 py-10 flex items-center  flex-col">
          <div className="font-bold mb-9 text-2xl">Sign up for free to start listening.</div>
          <div className="flex py-4 flex-col space-y-2 w-full">
            <h2 className="font-bold">Email address</h2>
            <input
              type="email"
              className="p-2 border border-gray-400 border-solid rounded placeholder-gray"
              placeholder=" Enter your email address"
            />
          </div>
          <div className="flex mb-4 flex-col space-y-2 w-full">
            <h2 className="font-bold">Conform your email</h2>
            <input
              type="email"
              className="p-2  border border-gray-400 border-solid rounded placeholder-gray"
              placeholder="Enter your email again"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <h2 className="font-bold"> Create a Password</h2>
            <input
              type="password"
              className="p-2 border border-gray-400 border-solid rounded placeholder-gray"
              placeholder="Enter a strong password"
            />
          </div>
          <div className="flex my-4 flex-col space-y-2 w-full">
            <h2 className="font-bold">What we should call you ?</h2>
            <input
              type="email"
              className="p-2  border border-gray-400 border-solid rounded placeholder-gray"
              placeholder=" Enter a profile name"
            />
          </div>
          <div className="w-full flex items-center justify-center my-8">
            <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
              Sign up
            </button>
          </div>
          <div className="w-full border border-solid border-gray-300 "></div>
          <div className="my-6 font-semibold text-lg ">
            Already have an account?
          </div>
          <div className="border border-gray-400 text-gray-600 font-bold w-full flex items-center justify-center py-4 rounded-full">
            <Link to="/Login">LOG IN INSTEAD</Link> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
