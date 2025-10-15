'use client';
import { motion } from "motion/react"
import React from 'react'
import ResumeButton from "../components/ResumeButton";

export default function Page() {
    return (
        <div className="background">
            <div className='flex flex-col align-center ml-auto mr-auto mt-[10%]'>
                <ResumeButton />
            </div>
        </div >
    )
}