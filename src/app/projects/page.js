'use client'
import React from 'react'
import { useReducer, useState } from 'react';
import { motion, AnimatePresence } from "motion/react"

export default function Page() {
    return (
        <div className="projectBackground">
            <div className='flex flex-row justify-evenly'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="box bg-gray-300"
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
                    }}></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="box bg-gray-300"
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
                    }}></motion.div>


            </div>
            <div className='flex flex-row justify-evenly'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="box bg-gray-300"
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
                    }}></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="box bg-gray-300"
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
                    }}></motion.div>
            </div>
        </div>
    )
}
