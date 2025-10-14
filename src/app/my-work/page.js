'use client'
import React from 'react'
import { motion } from "motion/react"
import GitHub from "../images/github-logo/github-mark/github-mark-white.png";
import Image from "next/image";
import LinkedIn from "../images/in-logo/in-logo/InBug-Black.png";


export default function Page() {

    return (
        <div className="projectBackground">
            <div className='flex flex-row justify-evenly flex-wrap'>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-110 lg:w-100 mt-[10%] text-center text-[#D9D3D7] sm:h-150 sm:w-50 font-mono"
                >
                    <p className="lg:text-[4rem] lg:mt-[-20%] sm:text-[2rem] sm:mt-[-10%]">MEC</p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>I am a Programming Co-Lead for the McMaster Engineering Competition. In this role, I host a competition for 100 competitors, allowing them to showcase their software engineering skills. I'll share some pictures soon!</p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>My duties include preparing competition materials, including a briefing presentation, competition package, rubric, and welcome message using G Suite.</p>

                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-110 lg:w-100 mt-[10%] text-center text-[#D9D3D7] lg:text-[4rem] items-center justify-center text-center sm:h-150 sm:w-50 sm:text-[2rem] font-mono mb-[10%]">
                    <p className='lg:text-[4rem] lg:mt-[-55%] sm:text-[2rem] sm:mt-[-85%]'>ALTIMETER</p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>In this project, I created an altimeter using an Arduino, C++ and a BMP180.</p><br></br>
                    <a href="https://github.com/tharnyelilvannan/altimeter">
                        <Image src={GitHub} height={50} alt="GitHub Link" className='mr-auto ml-auto lg:mb-[-90%]' />
                    </a>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-110 lg:w-100 mt-[10%] text-center text-[#D9D3D7] lg:text-[5rem] sm:h-150 sm:w-50 sm:text-[5rem] font-mono">
                    <p className='lg:text-[4rem] lg:mt-[-20%] sm:text-[2rem] sm:mt-[10%]'>DARE</p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>I am a Software Team Member for the McMaster Deep-space Analogue Research Expedition. In this role, I am developing a web app with React that allows us to remotely control our ROV, BELUGA. </p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>BELUGA's mission is to simulate exploring the Galilean moon Europa, known for potential oceans beneath its ice. BELUGA will be able to explore underwater, recording data that it will be able to bring home.</p>

                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] lg:text-[4rem] items-center justify-center text-center sm:h-150 sm:w-50 sm:text-[2rem] font-mono mb-[10%]">
                    <p className='lg:text-[4rem] lg:mt-[-55%] sm:text-[2rem] sm:mt-[-30%]'>PORTFOLIO</p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>It's what you're looking at right now! Created with React and Next.js, and deployed with Vercel. It is a work in progress!</p><br></br>
                    <a href="https://github.com/tharnyelilvannan/portfolio">
                        <Image src={GitHub} height={50} alt="GitHub Link" className='mr-auto ml-auto lg:mb-[-90%]' />
                    </a>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] lg:text-[4rem] items-center justify-center text-center sm:h-150 sm:w-50 sm:text-[2rem] font-mono mb-[10%]">
                    <p className='lg:text-[4rem] lg:mt-[-55%] sm:text-[2rem] sm:mt-[-40%]'>MASS</p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>I am Co-VP Communications for McMaster Advanced Space Systems. In this role, I monitor the club email, ensure team communication is seamless, and handle communication with the MES. </p>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={event => { }}
                    onHoverEnd={event => { }}
                    className="box lg:h-110 lg:w-100 text-center text-[#D9D3D7] lg:text-[4rem] items-center justify-center text-center sm:h-150 sm:w-50 sm:text-[2rem] font-mono mb-[10%]">
                    <p className='lg:text-[4rem] lg:mt-[-55%] sm:text-[2rem] sm:mt-[0%]'>RESCUE</p>
                    <p className='lg:text-[1rem] sm:text-[0.8rem]'>This is a project built in a team of three for a class assignment. It simulates performing rescue missions with a drone to remote islands. Built using Java, JUnit, Git and GitHub Actions.</p><br></br>
                    <a href="https://github.com/tharnyelilvannan/RescueMission">
                        <Image src={GitHub} height={50} alt="GitHub Link" className='mr-auto ml-auto lg:mb-[-90%]' />
                    </a>
                </motion.button>

            </div>

        </div>
    )

}