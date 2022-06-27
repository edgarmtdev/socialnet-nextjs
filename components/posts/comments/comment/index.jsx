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
                <p>{comment.author.name}</p>
                <p className=' text-slate-400 mt-1 text-xs'>{comment.body}</p>
            </Body>
        </Container>
    )
}
