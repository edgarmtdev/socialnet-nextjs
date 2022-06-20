import React from 'react'
import Link from 'next/link'
import { Item } from '../styles'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { Cicle } from './styles'

export default function Routes({ user, setOpen, open }) {
    return (
        <>
            <Link href={'/friends'}>
                <Item>Friends</Item>
            </Link>
            <Link href={'/people/allusers'}>
                <Item>People</Item>
            </Link>
            <Cicle onClick={() => setOpen(!open)}>
                <img src={user.profilePic} alt=" " className=' w-7 h-7 rounded-full object-cover' />
                <BiChevronDown className={` w-7 h-7  transition ${open && 'rotate-180 transition'}`} />
            </Cicle>
        </>
    )
}
