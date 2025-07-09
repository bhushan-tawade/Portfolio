import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Twirl as Hamburger } from 'hamburger-react'

const Navbar = ({isOpen, setOpen, toggleColor}) => {
  
  return (
    <div className={`bg-transparent absolute top-0 h-20 flex items-center justify-between px-25 max-[426px]:px-15 z-[99999] ${isOpen && `fixed top-0`} w-full `}>
        <img className='h-10 cursor-pointer md:h-8 max-[426px]:h-6 ' src={isOpen || toggleColor ?`logoWhite.png` : `./logoBlack.png`} alt="Logo"/>
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} isOpen={isOpen} setOpen={setOpen} color={isOpen || toggleColor ? 'white' : 'black'} rounded  duration={0.8}/>
    </div>
  )
}

export default Navbar