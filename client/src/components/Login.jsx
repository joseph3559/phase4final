import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
  return (
    <div className='w-full h-screen '>
        <div className='w-full h-1/4 bg-[#333366]'>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 mx-auto items-center bg-white rounded-xl shadow-xl lg:max-w-xl">
                <h1 className="mt-6 text-2xl font-semibold text-center text-black">
                    Sign In
                </h1>
                <p className='text-center text-gray-600'>
                Enter your details to login
                </p>
                <form className="mt-6 px-20">
                    <div className="mb-2">
                    <label class="relative block">
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email" type="email" name="email"/>
                    </label>
                    </div>

                    <div className="mb-2">
                    <label class="relative block">
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" type="password" name="password"/>
                    </label>
                    </div>
                    <a
                        href="/"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={() => {
                            navigate("/createLogbookSummary");
                        }}
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700 mb-6">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login