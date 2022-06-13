import React from 'react'
import Comment from './Comment'

export default function Comments({ comments }) {
    return (
        <section className=' mx-5'>
            <h1 className='text-lg font-medium mx-4'>Comments</h1>
                {comments.map(comment => {
                    return (
                        <Comment comment={comment}/>
                    )
                })}
        </section>
    )
}
