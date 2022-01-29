import React from "react";
import { HeadLine, HeadLineP } from "../Navbar/style";
import {
  FooterStructure,
  Logo,
  FooterLink,
  FooterLinkContainer
} from "./style";

const Footer: React.FC = () => (
  <FooterStructure>
    <HeadLine>
      <Logo />
      <HeadLineP to="/">Seelly</HeadLineP>
    </HeadLine>
    <FooterLinkContainer>
      <FooterLink>Sobre</FooterLink>
      <FooterLink>© Copyright 2022</FooterLink>
    </FooterLinkContainer>
  </FooterStructure>
);

export default Footer;
