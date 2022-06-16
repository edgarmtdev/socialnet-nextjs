import React from 'react'
import Friend from './card'
import { Container, Title } from './styles'

export default function MyFriends({ friends }) {
    return (
        <Container>
            <Title>Friends</Title>
            {friends.map(friend => <Friend key={friend.id} friend={friend} />)}
        </Container>
    )
}
