import React from 'react'

export default function Post({ post }) {
    return (
        <article>
            <p>{post.content}</p>
            <img src={post.image} alt="" className=' w-[200px] h-[200px] object-cover'/>
        </article>
    )
}
