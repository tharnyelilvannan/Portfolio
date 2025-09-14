'use client'
import React from 'react'
import { motion } from "motion/react"
import Link from "next/link"


export default function Page() {
    const handleMEC = () => {

    }

    const handleDARE = () => {

    }

    const handlePROJECTS = () => {

    }

    return (
        <div className="projectBackground">
            <div className='flex flex-col gap-20 justify-evenly'>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    whileTap={{ scale: 0.95 }}
                    onTap={() => { handleMEC }}
                    className="box lg:h-100 lg:w-200 mt-[10%] text-center text-[#D9D3D7] lg:text-[16.5rem] sm:h-50 sm:w-100 sm:text-[10rem] font-mono"
                >
                    <p className="sm:mt-[-6%] lg:mt-[0%]">MEC</p>

                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    whileTap={{ scale: 0.95 }}
                    onTap={() => { handleDARE }}
                    className="box lg:h-100 lg:w-200 mt-[10%] text-center text-[#D9D3D7] lg:text-[16.5rem] sm:h-50 sm:w-100 sm:text-[10rem] font-mono"><p className='lg:mt-[0%] sm:mt-[-6%]'>DARE</p>

                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    whileTap={{ scale: 0.95 }}
                    onTap={() => { handlePROJECTS }}
                    className="box lg:h-100 lg:w-200 mt-[10%] text-center text-[#D9D3D7] lg:text-[9.5rem] items-center justify-center text-center sm:h-50 sm:w-100 sm:text-[5rem] font-mono mb-[10%]"><p className='lg:mt-[1%] sm:mt-[0.5%]'>PROJECTS</p>

                </motion.button>

            </div>

        </div>
    )
}
