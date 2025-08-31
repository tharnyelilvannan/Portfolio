"use client";
import me from './images/Picture1.jpg';
import Image from "next/image";
import { motion } from "motion/react"
import TextAnimation from "./TextAnimation"
import "tailwindcss"
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';

export default function Home() {
  return (
    <>
      <div className="container min-h-screen min-w-screen bg-[#022d33]">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-y-55 left-130 font-[Georgia] text-9xl text-[#FFFFFF] font-bold"
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}>Hello!</motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute text-[#FFFFFF] text-2xl inset-y-90 font-[Georgia] left-131"
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}>I'm Tharny, and I'm a third year Software Engineering student at McMaster University.</motion.div>
        <Image
          src={me}
          height={300}
          alt="Picture of Tharny"
          className="inset-y-55 left-40 absolute"
        />

      </div >
    </>
  )
}