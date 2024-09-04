import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2; 

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
      const offsetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <section className={`navbar-container ${activeSection}-active`}>
        <div 
          ref={navbarRef} 
          className="navbar container mx-auto flex justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-gray-700 w-full bg-gray-900"
        >
          
          <div className=' text-white text-xl font-bold border border-gray-600 m-4 rounded font-lobster p-[5px] bg-black/30 backdrop-blur-md'>
            CD
          </div>

          
          <div className="hidden md:flex items-center justify-center flex-1 space-x-14">
            <button onClick={() => handleScrollToSection('home')} className="text-white font-bold text-lg hover:text-red-700">home</button>
            <button onClick={() => handleScrollToSection('about')} className="text-white font-bold text-lg hover:text-red-700">about</button>
            <button onClick={() => handleScrollToSection('skills')} className="text-white font-bold text-lg hover:text-red-700">Skills</button>
            <button onClick={() => handleScrollToSection('projects')} className="text-white font-bold text-lg hover:text-red-700">projects</button>
            <button onClick={() => handleScrollToSection('journey')} className="text-white font-bold text-lg hover:text-red-700">Journey</button>
            <button onClick={() => handleScrollToSection('contact')} className="text-white font-bold text-lg hover:text-red-700">Contact</button>
          </div>

         
          <div className='hidden md:flex bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-4'>
            <button onClick={() => handleScrollToSection('contact')}>Get Resume</button>
          </div>

          
          <div className="md:hidden text-white p-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {menuOpen && (
          <div className="dropdown-menu md:hidden flex flex-col items-center py-4 space-y-4 bg-black/80 backdrop-blur-md fixed top-[4rem] left-0 right-0 z-40">
            <button onClick={() => handleScrollToSection('home')} className="text-white font-bold text-lg hover:text-red-700">home</button>
            <button onClick={() => handleScrollToSection('about')} className="text-white font-bold text-lg hover:text-red-700">about</button>
            <button onClick={() => handleScrollToSection('skills')} className="text-white font-bold text-lg hover:text-red-700">Skills</button>
            <button onClick={() => handleScrollToSection('projects')} className="text-white font-bold text-lg hover:text-red-700">projects</button>
            <button onClick={() => handleScrollToSection('journey')} className="text-white font-bold text-lg hover:text-red-700">Journey</button>
            <button onClick={() => handleScrollToSection('contact')} className="text-white font-bold text-lg hover:text-red-700">Contact</button>
            <button className="bg-red-500 text-white font-semibold py-2 px-12 rounded" onClick={() => handleScrollToSection('contact')}>Get Resume</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
