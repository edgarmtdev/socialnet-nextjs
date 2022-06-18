import React from 'react'
import Link from 'next/link'
import { Item } from '../styles'
import { BiChevronDown } from 'react-icons/bi'
import { Cicle } from './styles'

export default function Routes({ user, setOpen, open }) {
    return (
        <>
            <Link href={'/friends'}>
                <Item>Friends</Item>
            </Link>
            <Link href={'/people'}>
                <Item>People</Item>
            </Link>
            <Cicle>
                <img src={user.profilePic} alt=" " className=' w-7 h-7 rounded-full' />
                <BiChevronDown className=' w-7 h-7' onClick={() => setOpen(!open)} />
            </Cicle>
        </>
    )
}
