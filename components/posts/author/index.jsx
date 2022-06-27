import Link from 'next/link'
import React from 'react'
import { AuthorContainer } from './styles'

export default function Author({ post }) {
    return (
        <Link href={`/profile/${post.author.id}`}>
            <AuthorContainer>
                <img
                    src={post.author.profilePic}
                    className='w-10 h-10 rounded-full object-cover hover:opacity-50'
                />
                <p className='flex flex-col hover:underline'>{post.author.name}</p>
                <span className='text-sm font-extralight text-gray-400 hidden md:block'>{post.createdAt.split('T')[0]}</span>
            </AuthorContainer>
        </Link>
    )
}
