import React from 'react'
import { CardFriend } from './styles'

export default function Friend({ friend }) {
  return (
    <CardFriend>
      <img src={friend.profilePic} alt="" className=' w-12' />
      <h3>{friend.name}</h3>
    </CardFriend>
  )
}
