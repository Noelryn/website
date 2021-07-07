import React from "react"
import image from "../images/Lake.jpg"

export default function Home() {
  return (
    <main>
      <img src={image} alt="Lake" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-8xl text-gray-600 font-bold cursive leading-none lg:leading-snug home-name">Noel Ryan</h1>

      </section>
    </main>
  )
}