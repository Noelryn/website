import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
  return (
    <header className="bg-blue-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-800 text-4xl font-bold cursive tracking-widest">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="text-white bg-blue-900" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-800">
            About
          </NavLink>
          <NavLink to="/post" activeClassName="text-white bg-blue-900" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-800">
            Post
          </NavLink>
          <NavLink to="/project" activeClassName="ttext-white bg-blue-900" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-800">
            Projects
          </NavLink>
        </nav>
        <div className=" inline-flex py-3 px-3 my-4">
          <SocialIcon url="https://www.linkedin.com/in/noel-ryan-3934b773/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://github.com/Noelryn" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://twitter.com/NoelRyan5" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
        </div>
        
      </div>
    </header>
  )
}