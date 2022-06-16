import React from 'react'
import { Body, Container } from './styles'

export default function Comment({ comment }) {
    return (
        <Container key={comment.id}>
            <img
                src={comment.author.profilePic}
                className='w-7 h-7 rounded-full'
                
            />
            <Body>
                <p className='font-medium'>{comment.author.name}</p>
                <p className='text-gray-600'>{comment.body}</p>
            </Body>
        </Container>
    )
}
