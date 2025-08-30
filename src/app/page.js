"use client";
import me from './images/Picture1.jpg';
import Image from "next/image";

export default function Home() {
  return (
    <div className="container min-h-screen min-w-screen bg-white">
      <h1 className="absolute inset-y-55 left-130 font-[Roboto] text-5xl text-black font-bold">Hello!</h1>
      <p className="absolute text-black text-xl inset-y-70 font-[Roboto] left-131">My name is Tharny. I'm a third year Software Engineering Student at McMaster University.</p>
      <Image src={me} height={300} alt="Picture of Tharny" className="inset-y-55 left-40 absolute" />
    </div >
  )
} 