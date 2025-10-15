'use client'
import React from 'react'
import { motion } from "motion/react"

export default function MASS() {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => { }}
            onHoverEnd={event => { }}
            className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] lg:text-[4rem] items-center justify-center text-center sm:h-150 sm:w-50 sm:text-[2rem] font-mono">
            <p className='lg:text-[4rem] lg:mt-[-55%] sm:text-[2rem] sm:mt-[-40%]'>MASS</p>
            <p className='lg:text-[1rem] sm:text-[0.8rem]'>I am Co-VP Communications for McMaster Advanced Space Systems. In this role, I monitor the club email, ensure team communication is seamless, and handle communication with the MES. </p>
        </motion.button>
    )
}