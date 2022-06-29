import Link from 'next/link'
import React from 'react'
import ProfilePic from '../../utils/ProfilePic'
import { AuthorContainer } from './styles'

export default function Author({ post }) {

    const date = post.createdAt.split('T')[0]
    return (
        <AuthorContainer>
            <ProfilePic src={post.author.profilePic} size={'md'} />
            <Link href={`/profile/${post.author.id}`}>
                <p className='flex flex-col hover:underline'>{post.author.name}</p>
            </Link>
            <span className='text-xs text-gray-400 hidden md:block'>{date}</span>
        </AuthorContainer>
    )
}
