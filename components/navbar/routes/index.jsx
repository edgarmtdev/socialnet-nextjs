import React from 'react'
import Link from 'next/link'
import { Item } from '../styles'

export default function Routes({ user, setOpen, open }) {
    return (
        <>
            <Link href={'/friends'}><Item>Friends</Item></Link>
            <Link href={'/profile'}><Item>MyProfile</Item></Link>
            <Link href={'/people'}><Item>People</Item></Link>
            <li className='flex p-4 gap-2 items-center cursor-pointer'
                onClick={() => setOpen(!open)}
            >
                <img src={user.profilePic} alt=" " className=' w-6 h-6 rounded-full' />
                {user.name}
            </li>
        </>
    )
}
