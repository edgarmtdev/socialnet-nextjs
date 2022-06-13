import React from 'react'
import { Author, Content, Post } from './styles'
import { useDispatch } from 'react-redux'
import { addComment } from '../../features/posts'
import { useRef } from 'react'
import Comments from './comments'

export default function Card({ post }) {

    const dispatch = useDispatch()

    const body = useRef()

    const newComment = (idPost) => {
        if (body.current.value) {
            dispatch(addComment({
                body: body.current.value,
                idPost
            }))
        } else {
            console.log('No');
        }
    }

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
                    className='w-full h-[400px] object-cover'
                />
            </Content>
            <section>
                <textarea ref={body} name='body' placeholder='Write...' />
                <button onClick={() => newComment(post.id)}>Listo</button>
            </section>
            <Comments comments={post.comments} />
        </Post>
    )
}