import { motion } from 'framer-motion';
import { slideIn } from '@/animations';
import Link from '../components/Link';
import React from 'react'

type NavItemsProps = {
  href?:string;
  children:React.ReactNode;
  index:number;
  delay:number;
  onClick?:(event:React.MouseEvent) => void
}

const NavItem = ({ href, children, onClick, index, delay }: NavItemsProps) => {
    return (
      <motion.li
        className="group"
        variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
        initial="hidden"
        animate="show"
      >
        <Link
          href={href || `/#${children}`}
          className="block p-2 duration-500 hover:underline hover:-translate-y-0.5"
          onClick={onClick}
          
        >
          {children}
        </Link>
      </motion.li>
    );
  };
  

export default NavItem
