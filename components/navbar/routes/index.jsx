import React from 'react'
import Link from 'next/link'
import { Item } from '../styles'
import { BiChevronDown } from 'react-icons/bi'

export default function Routes({ user, setOpen, open }) {
    return (
        <>
            <Link href={'/friends'}><Item>Friends</Item></Link>
            <Link href={'/people'}><Item>People</Item></Link>
            <li className='flex items-center cursor-pointer w-14 bg-great-blue-700 rounded-full shadow-lg hover:bg-great-blue-500'>
                <img src={user.profilePic} alt=" " className=' w-7 h-7 rounded-full' />
                <BiChevronDown className=' w-7 h-7' onClick={() => setOpen(!open)} />
            </li>
        </>
    )
}
