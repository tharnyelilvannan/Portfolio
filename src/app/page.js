"use client";
import me from './images/Picture1.jpg';
import Image from "next/image";
import { motion } from "motion/react"
import "tailwindcss"

export default function Home() {
  return (
    <>
      <div className="background">
        <div className='flex flex-row-reverse justify-evenly gap-10 items-center'>
          <div className='flex flex-col-reverse gap-10'>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="homepageTitle text-left"
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
              }}>Hello!</motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="homepageBody text-left"
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
              }}>I'm Tharny, and I'm a third year Software Engineering student at McMaster University.</motion.div>
          </div>
          <Image
            src={me}
            alt="Picture of Tharny"
            className="homepageImage"
          />
        </div>

      </div >
    </>
  )
}