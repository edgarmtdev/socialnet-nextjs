import React from 'react'

export default function Post({ post }) {
    return (
        <article>
            <p>{post.content}</p>
            <img src={post.image} alt="" />
        </article>
    )
}
