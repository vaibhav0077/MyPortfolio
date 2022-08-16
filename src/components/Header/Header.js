import Link from "next/link";
import React from "react";
import {
  AiFillCode,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInfo,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/logo.svg" height={40} width={40} />
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
            Vaibhav Patel
          </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a href="#">
          <NavLink>Blog</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/vaibhav0077">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vaibhav-patel-633826193/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://leetcode.com/vaibhav0077/">
        <AiFillCode size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linktr.ee/vaibhav0077">
        <AiOutlineInfo size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
