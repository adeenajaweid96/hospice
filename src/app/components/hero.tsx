import React from 'react'
import Image from 'next/image';
import  image from "../public/home.jpg";
const Hero = () => {
  return (
//     <section className="relative w-full h-[600px]">

//     <div className="absolute inset-0 z-0">
//     <Image src={image} alt='home' className="w-full" width={1000} height={1000}/>
// </div>
  
//     <div className="relative z-10 text-left ml-24 mt-20 text-white">

//         <h1 className="text-4xl font-bold">We Care for Your Health<br/> Every Moment</h1>
//         <p className="mt-4 text-1xl">If you are looking at blank cassettes on the web, you may be very confused at<br/>
//          the difference in price You may see some for as low as each.</p>
//         <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-white hover:text-sky-500 hover:font-bold">
//           Get Started
//         </button>
//       </div>  
//     </section>
<section className="relative w-full h-screen m-0 p-0"> {/* Set the height of the section */}
      
{/* Image with relative container */}
<div className="absolute inset-0 z-0 p-0 m-0"> {/* Image covers entire section */}
  <Image 
    src={image} 
    alt="home" 
    layout="fill"    // Makes the image fill the container
    objectFit="cover"  // Ensures the image covers the section without distortion
    priority={true} // Loads this image first
  />
</div>

{/* Content positioned over the image */}
<div className="relative z-10 text-left ml-24 py-40 text-white">
  <h1 className="text-4xl  font-bold">
    We Care for Your Health<br />Every Moment
  </h1>
  <p className="mt-4 text-1xl">
    If you are looking at blank cassettes on the web, you may be very confused at<br />
    the difference in price. You may see some for as low as each.
  </p>
  <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-white hover:text-sky-500 hover:font-bold">
    Get Started
  </button>
</div>
</section>
  );
}

export default Hero
