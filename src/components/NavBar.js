import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/post">
            Post
          </NavLink>
          <NavLink to="/project">
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  )
}