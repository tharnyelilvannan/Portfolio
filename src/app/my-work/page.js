'use client'
import React from 'react'
import { motion } from "motion/react"
import GitHub from "../images/github-logo/github-mark/github-mark-white.png";
import Image from "next/image";
import LinkedIn from "../images/in-logo/in-logo/InBug-Black.png";
import MEC from '../components/MEC';
import Altimeter from '../components/Altimeter';
import DARE from '../components/DARE';
import Portfolio from '../components/Portfolio';
import MASS from '../components/MASS';
import RescueMission from '../components/RescueMission';


export default function Page() {

    return (
        <div className="projectBackground p-10">
            <div className='flex flex-row justify-evenly flex-wrap gap-20'>

                <MEC />
                <Altimeter />
                <DARE />
                <Portfolio />
                <MASS />
                <RescueMission />

            </div>

        </div>
    )

}