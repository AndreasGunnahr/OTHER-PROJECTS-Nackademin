import React, { useState } from "react"

import { NavContainer, Logo, LinkWrapper, NavLink } from "./navbar.styled"

import Hamburger from "components/Hamburger"
import Sidebar from "components/Sidebar"

const Navbar = ({ siteLinks }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavContainer>
      <Logo to="/" open={isOpen}>
        A. Gunnahr
      </Logo>
      <Sidebar isOpen={isOpen} siteLinks={siteLinks} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <LinkWrapper>
        {siteLinks.map(({ link, name }, key) => (
          <NavLink
            key={key}
            activeStyle={{
              borderBottom: "3px solid #FF7235",
            }}
            to={link}
          >
            {name}
          </NavLink>
        ))}
      </LinkWrapper>
    </NavContainer>
  )
}

export default Navbar
