'use client'
import React from 'react'
import { motion } from "motion/react"
import GitHub from "../images/github-logo/github-mark/github-mark-white.png";
import Image from "next/image";

export default function Portfolio() {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => { }}
            onHoverEnd={event => { }}
            className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] lg:text-[4rem] items-center justify-center text-center sm:h-150 sm:w-50 sm:text-[2rem] font-mono">
            <p className='lg:text-[4rem] lg:mt-[-55%] sm:text-[2rem] sm:mt-[-30%]'>PORTFOLIO</p>
            <p className='lg:text-[1rem] sm:text-[0.8rem]'>It's what you're looking at right now! Created with React and Next.js, and deployed with Vercel. It is a work in progress!</p><br></br>
            <a href="https://github.com/tharnyelilvannan/portfolio">
                <Image src={GitHub} height={50} alt="GitHub Link" className='mr-auto ml-auto lg:mb-[-90%]' />
            </a>
        </motion.button>
    )
}