import React from 'react'
import Image from 'next/image';
import  image from "../public/about-me.jpg";


const About = () => {
    return (
        <div className='container-fluid columns-2 pb-32 bg-slate-100 '>

            <h2 className=' bg-slate-100 text-4xl font-bold text-blue-900 ml-32 mt-36'>About Us</h2>
            <p className='text-blue-950 font-medium ml-32 pt-12 pb-10'>we believe that great ideas are born from collaboration, innovation, <br/>
                and a passion for excellence. Our journey began in 2013<br/>
                 with a simple vision: to create solutions that make a meaningful <br/>
                 impact on the lives of our customers. Today, we are proud to be a<br/>
                  trusted partner to individuals and businesses worldwide, 
                  delivering <br/>cutting-edge products and services that push the boundaries of what’s possible.<br/><br/>
                  Our team consists of experts from diverse backgrounds, all united <br/>by a shared passion
                   for excellence. We work together to create <br/> leveraging our expertise and experience 
                   to bring you the best <br/>solutions possible.</p>
       
                  <button className=" px-6 py-3 ml-32 align-middle hover:border-solid hover:border-2 hover:border-sky-400 bg-blue-500 text-white  hover:bg-white hover:text-sky-500 hover:font-bold">
         Read More
       </button>
       
       <div className=' ml-32 pt-20'>
<Image src={image} alt='aboutus' height={450} width={450} />
       </div>
        </div>
    )
}

export default About
