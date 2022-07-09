import React from 'react'
import Link from 'next/link'
import { Body, Container } from './styles'

export default function Comment({ comment }) {
    return (
        <Container key={comment.id}>
            <Link href={`/profile/${comment.authorId}`}>
                <img
                src={comment.author.profilePic}
                className='w-6 h-6 rounded-full hover:opacity-30' 
            /> 
            </Link>
            <Body>
                <Link href={`/profile/${comment.authorId}`}><p className='hover:underline cursor-pointer'>{comment.author.name}</p></Link>
                <p className=' text-slate-400 mt-[2px] text-xs'>{comment.body}</p>
            </Body>
        </Container>
    )
}
