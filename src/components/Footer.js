import React from 'react'
import {FaribbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare, FaDribbble} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>

        <div className='py-16 px-4 grid lg:grid-cols3 gap-8 text-gray-300'>
            <div >
                <h1 className='w-full text-3xl font-bold text-orange-500'>
                Yum Eats
                </h1>
                <p>
                Bangalore, The silicon valley of India, serves one of 
                the finest tastes in the country. Food has always been 
                a fantastic highlight of Bangalore because it is a city of
                 love, culture, and food. We might forget everything about a place 
                 we visited, but we can never forget the amazing culinary experience we
                  had at a particular place. 
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                  <FaFacebookSquare  size={30}/>
                   <FaInstagram size={30}/>
                   <FaTwitterSquare size={30}/>
                   <FaGithubSquare size={30}/>
                   <FaDribbble size={30}/>
                </div>

            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div >
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>

                    <ul>
                        <li className='py-2 text-sm'>Banglore</li>
                        <li className='py-2 text-sm'>Chennai</li>
                        <li className='py-2 text-sm'>Hyderabad</li>
                        <li className='py-2 text-sm'>Goa</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer