import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]'>
        <div className='logo'>
            <img className='w-[150px] cursor-pointer' src='logo.png' alt='logo' />
        </div>
        <div className='links flex items-center gap-2'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact </Link>
            <Link>Services</Link>
            <Avatar name="Wim Mostmans" size = "40" round = "50%" className="cursor-pointer ml-2" />
        </div>
    </div>
  )
}
