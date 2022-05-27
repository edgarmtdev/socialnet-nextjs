import { signOut } from 'firebase/auth'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../config/firebase'

export default function Navbar() {

    const { logged, user: { name, profilePic } } = useSelector(state => state.auth)

    return (
        <nav className=' bg-sky-900 text-white flex px-14 p-4'>
            <h2 className=' text-lg'>Logo</h2>
            {!logged ?
                <ul className=' flex items-center ml-auto gap-5'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/auth/login'}>Login</Link></li>
                </ul>
                :
                <ul className=' flex items-center ml-auto gap-5'>
                    <li className=' cursor-pointer' onClick={() => { signOut(auth) }}>Logout</li>
                    <li><Link href={'/'}><p>{name}</p></Link></li>
                    <li><img src={profilePic} alt="" className=' w-6 h-6 rounded-full' /></li>
                </ul>
            }
        </nav>
    )
}
