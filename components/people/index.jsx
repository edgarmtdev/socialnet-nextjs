import React from 'react'
import CardUser from './carduser'
import { Container, Title } from './styles'

export default function ContainerPeople({ title, data }) {

    let idPeople
    switch (title) {
        case 'Requests Sent':
            idPeople = 1
            break;
        case 'Friendship request':
            idPeople = 2
            break;
        case 'All people':
            idPeople = 3
            break;
        default:
            idPeople = 0
            break;
    }

    return (
        <>
            <Title>{title}</Title>
            <Container className='flex gap-5 flex-wrap text-gray-200 mb-16'>
                {data?.map(user => <CardUser key={user.id} user={user} idPeople={idPeople} />)}
            </Container>
        </>
    )
}
