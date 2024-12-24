import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../../Componants/Breadcrumb/Breadcrumb'
import HeaderText from '../../Componants/HeaderText/HeaderText'

const SignIN = () => {
  return (
<>
<div className='relative top-10 w-fit left-10 '>
    
    <Breadcrumb text={'Sign In'} />
    </div>


<div className="flex items-center justify-center min-h-screen bg-gray-100">

  <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
    {/* Title */}
    <HeaderText text={'Sign In'} />

    <p className="text-center text-gray-500 text-sm mt-1">
      Please login below account detail
    </p>
    <div className="w-16 h-1 bg-red-600 mx-auto my-4"></div>

    {/* Form */}
    <form className="space-y-4">
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full px-3 py-2 border-y border-gray-300 border-x border-x-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full px-3 py-2 border-y border-gray-300 border-x border-x-gray-300  focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {/* Submit Button */}
      <div className='mx-10'>
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-2  hover:bg-gray-800 transition"
        >
          SIGN IN
        </button>
      </div>
    </form>

    {/* Links */}
    <div className="mt-4 text-center">
      <a
        href="#"
        className="text-sm text-gray-500 hover:underline hover:text-red-600"
      >
        Forgot your password?
      </a>
    </div>
    <div className="mt-4 text-center text-sm">
      <span className="text-gray-500">Don't have an account?</span>{" "}
      <Link
        href="/signup"
        className="font-medium text-red-700 hover:underline hover:text-red-800"
      >
        Create account
      </Link>
    </div>
  </div>
</div>
</>

  )
}

export default SignIN
