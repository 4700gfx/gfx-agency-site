import React from 'react';
import blackLogo from '../assets/images/4700gfxblack.png';

const Hero = () => {
  return (
    <section className="my-12">
      <div className="bg-white text-black h-[60vh] w-11/12 mx-auto rounded-3xl flex flex-col md:flex-row items-center p-8 shadow-lg">
        <div className="flex flex-col text-center md:text-left md:w-1/2 space-y-6 p-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Your One-Stop Digital Shop
          </h1>
          <p className="text-lg leading-relaxed">
            Welcome to 4700 GFX — where creativity meets functionality. We specialize in providing high-quality, custom digital solutions tailored to fit your business needs. From sleek websites to eye-catching branding, we’re here to help you make an unforgettable impression.
          </p>
          <p className="text-lg leading-relaxed">
            Our team is passionate about design, innovation, and pushing the limits of digital possibilities. Whether you’re launching a startup, rebranding an established business, or just need a fresh new look, we’ve got you covered.
          </p>
          <p className="text-lg leading-relaxed">
            Ready to elevate your digital presence? Partner with 4700 GFX and watch your ideas come to life.
          </p>
          <div className='flex flex-row'>
          <button className='bg-black text-white rounded-full px-10 py-4 mx-4'>Start Here !</button>
          <button className='bg-black text-white rounded-full px-10 py-4'>Start Here !</button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2 flex justify-center">
          <img
            src={blackLogo}
            alt="4700 GFX Logo"
            className="w-64 md:w-1/2 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
