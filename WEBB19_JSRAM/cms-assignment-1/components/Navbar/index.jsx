import { useState } from "react";
import Link from "next/link";
import linkData from "./LinkData";

import Hamburger from "components/Hamburger";
import Sidebar from "components/Sidebar";
import { NavContainer, Logo, LinkWrapper, NavLink, LoginBtn } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Link href="/" passHref>
        <Logo isOpen={isOpen}>Logo</Logo>
      </Link>
      <Sidebar isOpen={isOpen} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <LinkWrapper>
        {linkData.map(({ to, name }, key) => (
          <Link key={key} href={to} passHref>
            <NavLink>{name}</NavLink>
          </Link>
        ))}
      </LinkWrapper>
      {/* <Link href="/login" passHref> */}
      <LoginBtn href="/login">Sign In</LoginBtn>
      {/* </Link> */}
    </NavContainer>
  );
};

export default Navbar;
