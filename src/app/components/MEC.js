'use client'
import React from 'react'
import { motion } from "motion/react"

export default function MEC() {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => { }}
            onHoverEnd={event => { }}
            className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] sm:h-150 sm:w-50 font-mono"
        >
            <p className="lg:text-[4rem] lg:mt-[-20%] sm:text-[2rem] sm:mt-[-10%]">MEC</p>
            <p className='lg:text-[1rem] sm:text-[0.8rem]'>I am a Programming Co-Lead for the McMaster Engineering Competition. In this role, I host a competition for 100 competitors, allowing them to showcase their software engineering skills. I'll share some pictures soon!</p>
            <p className='lg:text-[1rem] sm:text-[0.8rem]'>My duties include preparing competition materials, including a briefing presentation, competition package, rubric, and welcome message using G Suite.</p>

        </motion.button>
    )
}