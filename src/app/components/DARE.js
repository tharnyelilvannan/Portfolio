'use client'
import React from 'react'
import { motion } from "motion/react"

export default function DARE() {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => { }}
            onHoverEnd={event => { }}
            className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] lg:text-[5rem] sm:h-150 sm:w-50 sm:text-[5rem] font-mono">
            <p className='lg:text-[4rem] lg:mt-[-20%] sm:text-[2rem] sm:mt-[10%]'>DARE</p>
            <p className='lg:text-[1rem] sm:text-[0.8rem]'>I am a Software Team Member for the McMaster Deep-space Analogue Research Expedition. In this role, I am developing a web app with React that allows us to remotely control our ROV, BELUGA. </p>
            <p className='lg:text-[1rem] sm:text-[0.8rem]'>BELUGA's mission is to simulate exploring the Galilean moon Europa, known for potential oceans beneath its ice. BELUGA will be able to explore underwater, recording data that it will be able to bring home.</p>

        </motion.button>
    )
}