import React from 'react'
import Card from './Card';

export default function Posts({ posts }) {
    return (
        <section className=' mx-auto w-full'>
            {posts.map(post => (<Card post={post} key={post.id} />))}
        </section>
    )
}
