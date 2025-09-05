'use client'
import React from 'react'
import { useReducer, useState } from 'react';
import { motion, AnimatePresence } from "motion/react"

export default function Page() {
    return (
        <div className="background">
            <div className="">
                <h1 className='hobby'>I'm in third year at McMaster University, where I study Software Engineering.</h1>
            </div>
            <div>
                <h1 className='hobby'>I love astronomy! I have my own telescope, and I enjoy taking it outside at night to search for Mars.</h1>
            </div>
            <div>
                <h1 className='hobby'>I love doing my own henna! That's why it is only ever my left hand that has henna.</h1>
            </div>
            <div>
                <h1 className='hobby'>I really love baking! I make some good lavander vanilla cupcakes!</h1>
            </div>
        </div>
    )
}
