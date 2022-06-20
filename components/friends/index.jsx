import React from 'react'
import Friend from './card'
import { Container, Title } from './styles'

export default function MyFriends({ friends }) {
    return (
        <Container>
            <Title>Friends</Title>
            <div className=' grid grid-cols-2 gap-3'>
                {friends.map(friend => <Friend key={friend.id} friend={friend} />)}
            </div>
        </Container>
    )
}
