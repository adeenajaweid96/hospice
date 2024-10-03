import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-8'>
    <div className="container mx-auto flex justify-around">
         <h2 className="text-xl font-medium  ml-20 text-white">Top Products</h2>
 <p className='text-white ml-20 hover:text-sky-500 '>Managed Website</p>
 <p className='text-white ml-20  hover:text-sky-500'>Manage Reputation</p>
 <p className='text-white ml-20  hover:text-sky-500'>Power Tools</p>
 <p className='text-white ml-20  hover:text-sky-500'>Marketing Service</p>

    </div>
    <div className="container mx-auto flex justify-between">
    <h2 className="text-xl font-medium mt-12  ml-20 text-white">Contact Us<br/>012-6532-568-9746<br/>
    012-6532-568-97468<br/>
    <button className="mt-6 px-6 py-3 align-middle bg-blue-500 text-white  hover:bg-white hover:text-sky-500 hover:font-bold">
    Get Started
  </button>
    </h2>

    </div>
    </footer>
  )
}

export default Footer


    
