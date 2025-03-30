"use client";

import LogoBlackImg from "./images/logo_black.png";
import { AnimatedOnScroll } from "../components/animated-on-scroll";
import { ContactBlock } from "../components/contact/contact";
import { NavigationMenu } from "../components/navbar/navbar";
import { CategoryBlock } from "../components/category/category";
import { IntroBlock } from "../components/intro/intro";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <main>
        <AnimatedOnScroll>
          <IntroBlock></IntroBlock>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <CategoryBlock></CategoryBlock>
        </AnimatedOnScroll>
      </main>
      <AnimatedOnScroll>
        <ContactBlock></ContactBlock>
      </AnimatedOnScroll>
    </>
  );
}
