'use client'
import React from 'react'
import { useReducer, useState } from 'react';
import { motion, AnimatePresence } from "motion/react"

export default function Page() {
    return (
        <div className="projectBackground">
            <div className='flex flex-col gap-20 justify-evenly'>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-100 lg:w-200 mt-[10%] text-center text-[#D9D3D7] lg:text-[16.5rem] font-mono">MEC

                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-100 lg:w-200 mt-[10%] text-center text-[#D9D3D7] lg:text-[16.5rem] font-mono">DARE

                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-100 lg:w-200 mt-[10%] text-center text-[#D9D3D7] lg:text-[9.5rem] items-center justify-center text-center font-mono mb-[10%]"><p className='lg:mt-[10%]'>PROJECTS</p>

                </motion.a>

            </div>

        </div>
    )
}
