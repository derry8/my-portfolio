import React from 'react';
import { FaHtml5,FaFigma ,FaCss3Alt, FaReact, FaNodeJs, FaVuejs, FaGitAlt, FaGitlab, FaDocker, FaPython, FaAws, FaDigitalOcean, FaPhp } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { BiLogoTypescript, BiLogoNetlify, BiLogoPostgresql } from 'react-icons/bi';
import { SiExpress, SiFlask, SiTailwindcss, SiNuxtdotjs, SiJest, SiTensorflow, SiAntdesign, SiSequelize, SiPassport, SiPostman, SiPythonanywhere,SiMysql,SiJquery   } from 'react-icons/si';
import { CgVercel } from 'react-icons/cg';
import { DiGithubAlt, DiMongodb } from 'react-icons/di';
import { FaBootstrap, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { TbBrandReactNative } from "react-icons/tb";




const Skills = () => {
  return (
    <section id="skills" className="min-h-screen mx-auto p-6  sm:p-8 md:p-12 lg:p-16">
      
      <h4 className=" text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8 -mt-11 font-teko">
        Technologies I Use.
      </h4>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaHtml5 className="text-2xl sm:text-3xl" /> HTML
        </span>
        
        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaCss3Alt className="text-2xl sm:text-3xl" /> CSS
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <IoLogoJavascript className="text-2xl sm:text-3xl" /> JavaScript
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaBootstrap className="text-2xl sm:text-3xl" /> Bootstrap
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <TbBrandReactNative  className="text-2xl sm:text-3xl" /> React native
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaReact className="text-2xl sm:text-3xl" /> React
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <SiJquery  className="text-2xl sm:text-3xl" /> Jquery
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaNodeJs className="text-2xl sm:text-3xl" /> NodeJS
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <SiMysql className="text-2xl sm:text-3xl" /> Mysql
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <SiTailwindcss className="text-2xl sm:text-3xl" /> Tailwind
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaVuejs className="text-2xl sm:text-3xl" /> VueJS
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaGitAlt className="text-2xl sm:text-3xl" /> Git
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <DiGithubAlt className="text-2xl sm:text-3xl" /> GitHub
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaPhp className="text-2xl sm:text-3xl" /> PHP
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <SiPostman className="text-2xl sm:text-3xl" /> Postman
        </span>

        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <AiOutlineMail className="text-2xl sm:text-3xl" /> EmailJS
        </span>

        
        <span className="inline-flex items-center justify-between gap-x-2 py-3 px-4 hover:-translate-y-1.5 transition-transform duration-300 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap">
          <FaFigma className="text-2xl sm:text-3xl" /> Figma
        </span>
        
      </div>
    </section>
  );
};

export default Skills;
