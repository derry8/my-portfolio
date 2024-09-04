import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Image from '../../assets/image.png';
import VideoPlayer from './Videoplayer';

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='bg-red-900 p-4 md:p-10 lg:p-14 overflow-hidden'>
      <div className='max-w-[60rem] mx-auto'>
        <Slider {...settings} className='w-full'>
          {/* Project 1 */}
          <div className='bg-red-950 p-4 md:p-6 rounded-lg shadow-lg flex flex-col'>
            <div className='relative w-full h-40 md:h-56 lg:h-64'>
              <VideoPlayer src='https://www.w3schools.com/html/mov_bbb.mp4' poster={Image} /> 
            </div>
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 font-teko'>
              MOFIX
            </h2>
            <p className='text-[#0ef] mb-1 text-sm md:text-base lg:text-lg '>
              <span className='text-[#0ef] font-extrabold'>HTML , PHP , JS , CSS , BOOTSTRAP</span>
            </p>
            <p className='text-gray-300 mb-4 text-sm md:text-base lg:text-lg font-bold'>
              Mofix is an online movie streaming website with the most recent released movies and tvshows
            </p>
            <div className='mt-auto flex flex-wrap gap-2 md:gap-4 '>
              <a href='https://github.com/username/project1' className='text-red-400 hover:underline font-bold'>
                GitHub
              </a>
              <a href='https://liveproject1.com' className='text-red-400 hover:underline font-bold'>
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className='bg-red-950 p-4 md:p-6 rounded-lg shadow-lg flex flex-col'>
            <div className='relative w-full h-40 md:h-56 lg:h-64'>
              <VideoPlayer src='https://www.w3schools.com/html/mov_bbb.mp4' poster={Image} /> 
            </div>
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 font-teko'>
              IKAZE
            </h2>
            <p className='text-[#0ef] mb-1 text-sm md:text-base lg:text-lg '>
              <span className='text-[#0ef] font-extrabold'>HTML , PHP , JS , CSS , BOOTSTRAP</span>
            </p>
            <p className='text-gray-300 mb-4 text-sm md:text-base lg:text-lg font-bold'>
              IKAZE is an online motel booking website with an admin panel for the admin
            </p>
            <div className='mt-auto flex flex-wrap gap-2 md:gap-4 '>
              <a href='https://github.com/username/project1' className='text-red-400 hover:underline font-bold'>
                GitHub
              </a>
              <a href='https://liveproject1.com' className='text-red-400 hover:underline font-bold'>
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className='bg-red-950 p-4 md:p-6 rounded-lg shadow-lg flex flex-col'>
            <div className='relative w-full h-40 md:h-56 lg:h-64'>
              <VideoPlayer src='https://www.w3schools.com/html/mov_bbb.mp4' poster={Image} /> 
            </div>
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 font-teko'>
              BOOBIXX
            </h2>
            <p className='text-[#0ef] mb-1 text-sm md:text-base lg:text-lg '>
              <span className='text-[#0ef] font-extrabold'>REACT , NODE JS , TAILWIND</span>
            </p>
            <p className='text-gray-300 mb-4 text-sm md:text-base lg:text-lg font-bold'>
              BOOBIXX is an online novel reading and writing website with online communities 
            </p>
            <div className='mt-auto flex flex-wrap gap-2 md:gap-4 '>
              <a href='https://github.com/username/project1' className='text-red-400 hover:underline font-bold'>
                GitHub
              </a>
              <a href='https://liveproject1.com' className='text-red-400 hover:underline font-bold'>
                Live Demo
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};


const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      type="button" 
      className="bg-red-900 text-red-100 rounded-full p-2 md:p-3 hover:bg-red-800 absolute left-[-100px] top-1/2 z-50 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
      </svg>
    </button>
  );
};


const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      type="button" 
      className="bg-red-900 text-red-100 rounded-full p-2 md:p-3 hover:bg-red-800 absolute right-[-100px] top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </button>
  );
};

export default Projects;
