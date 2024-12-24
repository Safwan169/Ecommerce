import React from 'react';
import HeaderText from '../../Componants/HeaderText/HeaderText';
import Breadcrumb from '../../Componants/Breadcrumb/Breadcrumb';
import Link from 'next/link';

const SignUp = () => {
  return (
   <>
   <div className='relative top-10    w-fit left-10 '>
    
   <Breadcrumb text={'Create Account'} />
   </div>

   <div className="flex justify-center items-center min-h-screen bg-gray-100">

<div className="bg-white p-8  shadow-md w-full max-w-md">
  {/* <h2 className="text-2xl font-bold text-center mb-4">
    <span className="border-b-2 border-red-500">Create Account</span>
  </h2> */}
  <HeaderText text={'Create Account'} />
  <p className="text-center text-gray-600 mb-6">Please register below account detail</p>
  <form>
    <div className="mb-4">
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
        First Name
      </label>
      <input
        type="text"
        id="first-name"
        placeholder="First Name"
        className="w-full border-y border-gray-300 border-x border-x-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
        Last Name
      </label>
      <input
        type="text"
        id="last-name"
        placeholder="Last Name"
        className="w-full border-y border-gray-300 border-x border-x-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="w-full border-y border-gray-300 border-x border-x-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="w-full border-y border-gray-300 border-x border-x-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
    </div>
  <div className='mx-10'>
  <button
      type="submit"
      className="w-full bg-red-800 text-white font-semibold duration-300  py-2 hover:bg-gray-800 focus:ring-4 focus:ring-red-300 focus:outline-none"
    >
      CREATE
    </button>
  </div>
  </form>
  <p className="text-center text-gray-600 mt-4">
    Already an account holder?{' '}
    <Link href="/signIn" className="text-red-700 hover:underline">
      Sign In
    </Link>
  </p>
</div>
</div>
   </>
  );
};

export default SignUp;
