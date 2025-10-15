'use client'
import React from 'react'
import { motion } from "motion/react"
import GitHub from "../images/github-logo/github-mark/github-mark-white.png";
import Image from "next/image";

export default function RescueMission() {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={event => { }}
            onHoverEnd={event => { }}
            className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] lg:text-[4rem] items-center justify-center text-center sm:h-150 sm:w-50 sm:text-[2rem] font-mono">
            <p className='lg:text-[4rem] lg:mt-[-55%] sm:text-[2rem] sm:mt-[0%]'>RESCUE</p>
            <p className='lg:text-[1rem] sm:text-[0.8rem]'>This is a project built in a team of three for a class assignment. It simulates performing rescue missions with a drone to remote islands. Built using Java, JUnit, Git and GitHub Actions.</p><br></br>
            <a href="https://github.com/tharnyelilvannan/RescueMission">
                <Image src={GitHub} height={50} alt="GitHub Link" className='mr-auto ml-auto lg:mb-[-90%]' />
            </a>
        </motion.button>
    )
}