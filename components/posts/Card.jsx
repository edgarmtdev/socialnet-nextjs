import React from 'react'
import { Author, Content, Post } from './styles'

export default function Card({ post }) {
    return (
        <Post>
            <Author>
                <img
                    src={post.author.profilePic}
                    className="w-10 rounded-full" alt={post.author.profilePic}
                />
                <span>{post.author.name}</span>
            </Author>
            <Content>
                <p className=' my-5 text-sm px-[20px]'>{post.content}</p>
                <img
                    src={post.image}
                    className='w-full h-[400px] object-cover rounded-b-lg'
                />
            </Content>
        </Post>
    )
}