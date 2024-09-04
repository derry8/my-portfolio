
import React, { useState, useEffect } from 'react';
import './aboutme.css'
import Icons from '../../hooks/Icons';
import image from '../../assets/image.png';

const AboutMe = () => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState('|');
  const content = [
    '🌐frontend development 🌐', 
    '⚙️ui/ux ⚙️', 
    '💻frontend development 💻',
    '💡mobile app development 💡'
  ]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText(content[currentIndex].slice(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      if (charIndex >= content[currentIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setCurrentIndex(prev => (prev + 1) % content.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor(prev => (prev === '|' ? '' : '|'));
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-red-900 p-4 flex items-center justify-center   ">
      <div className="relative flex flex-col lg:flex-row items-center bg-red-950 border-red-700 rounded-lg shadow-lg animate-float p-5 max-w-6xl mx-auto">
        <div className="relative flex-shrink-0 bg-black bg-opacity-40 p-5 rounded-lg shadow-lg backdrop-blur-md mb-4 lg:mb-0"><img
            src={image}
            alt="Profile"
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[270px] md:h-[270px] lg:w-[350px] lg:h-[350px] xl:w-[470px] xl:h-[400px] object-cover rounded"
          />
        </div>
        <div className="text-center md:text-center md:ml-8 mt-4 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-teko">
            Hey, I'm <span>Cyubahiro Derrick</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-4">I am a 16 year old software developer who is certified in </p>
          <h4 className="text-xl md:text-2xl lg:text-3xl mb-4 text-lightcoral text-[lightcoral]">
            {text}
            <span className="inline-block animate-blink">{cursor}</span>
          </h4>
          < Icons/>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default AboutMe;
