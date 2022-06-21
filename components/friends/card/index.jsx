import React from 'react'
import { CardFriend } from './styles'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { BsChatSquareDotsFill } from 'react-icons/bs'

export default function Friend({ friend }) {
    const { user: { idUser } } = useSelector(state => state.auth)
    return (
        <CardFriend>
            <Link href={`/profile/${friend.id}`}>
                <img src={friend.profilePic} className=' w-12 h-12 rounded-full object-cover hover:opacity-60' />
            </Link>
            <h3>{friend.name}</h3>
            <div className=' ml-auto hover:opacity-30 cursor-pointer'>
                <Link href={`/chats/${idUser}/${friend.id}`}>
                    <span><BsChatSquareDotsFill className='w-5 h-5 text-slate-300' /></span>
                </Link>
            </div>
        </CardFriend>
    )
}
