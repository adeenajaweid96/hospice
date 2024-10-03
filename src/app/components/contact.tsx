import React from 'react'
const Contact = () => {
  return (

    <div className='bg-slate-100 pb-20 items-center'>
      <div className='max-h-96 min-h-96  w-96 bg-white border-grey mx-auto'>
<h1 className='text-center pt-5 font-semibold text-2xl'>Book an Appointment</h1>
<input type="name" placeholder="Enter your name" className="border rounded ml-8 px-4 py-2 w-80 mt-5 focus:ring focus:ring-violet-300"/>
<input type="email" placeholder="Enter your email" className="border rounded ml-8 px-4 py-2 w-80 mt-5 focus:ring focus:ring-violet-300" />
<input type="password" placeholder="Enter your password" className="border rounded ml-8 px-4 py-2 w-80 mt-5 focus:ring focus:ring-violet-300" />
<input type="number" placeholder="Enter your phone number" className="border rounded ml-8 px-4 py-2 w-80 mt-5 focus:ring focus:ring-violet-300" />
<input type="number" placeholder="Enter your age" className=" focus:ring focus:ring-violet-300 border rounded ml-8 px-4 py-2 w-80 mt-5" />


    </div>
    <div className='flex justify-center items-center'>
    <button className="px-6 py-3 mt-10  hover:border-solid hover:border-2 hover:border-sky-400 bg-blue-500 text-white  hover:bg-white hover:text-sky-500 hover:font-bold">
         Confirm Booking
       </button></div>
    </div>
  )
}

export default Contact
