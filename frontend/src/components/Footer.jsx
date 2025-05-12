import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            RIIVOR was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 9259797411</li>
                <li>riivor01@gmail.com</li>
                <ul className="flex items-center" >
                  <li>
                    <a href="https://www.instagram.com/riivor_?igsh=MWxsOXVxeHVtZHhlag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                      <img src={assets.instagram} className='w-4 h-4 mr-2' alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/919259797411" target="_blank" rel='noopener noreferrer'>
                      <img src={assets.whatsapp} className='w-5 h-5 mr-2'  alt="" />
                    </a>
                  </li>
                </ul>

            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ riivor.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
