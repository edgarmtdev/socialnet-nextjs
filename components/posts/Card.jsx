import React from 'react'
import { Author, Content, Post } from './styled'

export default function Card({ post }) {
    return (
        <Post>
            <Author>
                <img src={post.author.profilePic} className="w-10 rounded-full" alt="" />
                <span>{post.author.name}</span>
            </Author>
            <Content>
                <p>{post.content}</p>
                <img src={post.image} alt="" className='w-[200px] h-[200px] object-cover' />
            </Content>
        </Post>
    )
}
