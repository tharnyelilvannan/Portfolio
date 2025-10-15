"use client";
import me from './images/Picture1.jpg';
import Image from "next/image";
import "tailwindcss"
import HomeTitle from './components/HomeTitle';
import HomeBody from './components/HomeBody';

export default function Home() {
  return (
    <>
      <div className="background p-10">
        <HomeTitle />
        <HomeBody />
      </div>
    </>
  )
}