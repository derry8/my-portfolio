import React from 'react';
import image from '../../assets/image.png';


const Hero = () => {
  return (
    <div className="bg-transparent h-screen flex items-center hero hero-bg-image"> 
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center hero-content px-4">
        <div className="text-white w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8 font-teko">
            Transforming Ideas into Reality 💻
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 lg:mb-10">
            I’m a software developer specializing in building high-quality web applications that solve real-world problems. 🚀
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg">
                View my resume 👨‍💻
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-6 rounded-lg">
              Let's Collaborate 🤝
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={image}
            alt="Laptop with Code"
            className="h-48 sm:h-60 md:h-[24rem] w-full md:w-[550px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
