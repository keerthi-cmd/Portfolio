import React from 'react'

type Props = {
    children?:React.ReactNode;
    className?:string;
    side?:'left'|'right';
}
const Sidebar = ({children, className = '', side='left'}:Props) => {
  return (
    <div
    className={`fixed bottom-0 flex-col items-center hidden md:flex ${className} ${
        side === 'left' ? 'left-6 xl:left-12' : 'right-6 xl:right-12'
      }`}>
      {children}
      <div className="bg-black h-24 w-0.5 mt-5"></div>
    </div>
  )
}

export default Sidebar