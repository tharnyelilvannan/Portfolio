"use client";
import me from './images/Picture1.jpg';
import Image from "next/image";
import { motion } from "motion/react"
import "tailwindcss"

export default function Home() {
  return (
    <>
      <div className="background">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="homepageTitle mr-auto flex ml-auto xs:mt-[20%] sm:mt-[20%] md:mt-[20%] lg:mt-[10%] xl:mt-[10%] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
          }}>Hello!</motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="homepageBody sm:mt-[-20%] md:mt[-30%] lg:mt-[-10%] xl:mt-[-10%] flex mr-auto ml-auto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
          }}>I'm Tharny, and I'm a third year Software Engineering student at McMaster University.</motion.div>
      </div>
    </>
  )
}