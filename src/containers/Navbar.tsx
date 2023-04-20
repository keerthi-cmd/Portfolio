import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { author, navbarSection } from "../utils/portfolio";
import NavItem from "./NavItem";
import NavButton from "../components/NavButton";
import useWindowWidth from "../hooks/use-window-width";
import { getBreakpointsWidth } from "../utils/helper";
import Button from "../components/Button";
import DarkModeButton from "../components/DarkModeButton";
import {fadeIn, slideIn} from '../animations';


const hideNavWhileScrolling = ({
  id = "navbar",
  offset = 100,
  when = true,
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    if (when) {
      let curScrollPos = window.pageYOffset;
      if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
      else nav.style.top = "0";
      prevScrollPos = curScrollPos;
    }
  };
};
const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth("md");
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;
  
  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapsed });
  }, [navbarCollapsed]);

  return (
    <motion.header
      id="navbar"
      className="fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg"
      variants = {fadeIn(0.5)}
      animate = "show"
      initial = "hidden"
    >
      <a href="/#about" className="block">
        <h1 className="text-2xl font-medium tracking-wider font-lobster">
          <span>{author.firstName}</span>{" "}
          <span className="text-black dark:text-white">{author.lastName}</span>
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-red-500 duration-300"></div>
        </h1>
      </a>
      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />
      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize bg-white text-black absolute text-sm md:text-white font-bold duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
          <ul className="flex flex-col list-style-none lg:gap-5 xl:gap-6 md:flex-row item-stretch md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay = {ANIMATION_DELAY}
                onClick={() => setNavbarCollapsed(false)}
              >
                {name}
              </NavItem>
            ))}
            <div className="flex items-center justify-between gap-5 xl:gap-6">
              {cta && (
                <Button
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
