import React from "react"
import { Lines, Container } from "./hamburger.styled"

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <Lines />
      <Lines />
      <Lines />
    </Container>
  )
}

export default Hamburger
