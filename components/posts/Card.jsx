import React from 'react'

export default function Card({ post }) {
    return (
        <article>
            <div className=' flex items-center'>
                <img src={post.author.profilePic} className="w-10 rounded-full" alt="" />
                <span>{post.author.name}</span>
            </div>
            <p>{post.content}</p>
            <img src={post.image} alt="" className=' w-[200px] h-[200px] object-cover' />
        </article>
    )
}
