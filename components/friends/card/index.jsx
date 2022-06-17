import React from 'react'
import { CardFriend } from './styles'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Friend({ friend }) {
  const { user: { idUser } } = useSelector(state => state.auth)
  return (
    <CardFriend>
      <img src={friend.profilePic} className=' w-12 h-12 rounded-full object-cover' />
      <h3>{friend.name}</h3>
      <Link href={`/chats/${idUser}/${friend.id}`}>Chat</Link>
    </CardFriend>
  )
}
