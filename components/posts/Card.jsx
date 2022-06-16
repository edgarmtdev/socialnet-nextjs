import React from 'react'
import { Author, Content, Post } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, likePost } from '../../features/posts'
import { useRef } from 'react'
import Comments from './comments'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { useEffect } from 'react'
import { BiLike } from 'react-icons/bi'
import { AiTwotoneLike } from 'react-icons/ai'

export default function Card({ post }) {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const body = useRef()
    const [likeState, setLikeState] = useState(false)

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

    useEffect(() => {
        post.likesUserIDs.forEach(likeID => {
            if (likeID === user.idUser) {
                setLikeState(true)
            }
        })
    }, [])


    const like = (idPost) => {
        dispatch(likePost({ idPost }))
    }

    const dislike = (idPost) => {
        setLikeState(false)
    }

    return (
        <Post>
            <Author>
                <img
                    src={post.author.profilePic}
                    className='w-10 rounded-full' alt={post.author.name.split(' ')[0]}
                />
                <p className='flex flex-col'>
                    {post.author.name}
                    <span className='text-sm font-extralight text-gray-400'>{post.createdAt.split('T')[0]}</span>
                </p>
            </Author>
            <Content>
                <ReactMarkdown className='my-5 text-sm px-[20px]'>{post.content}</ReactMarkdown>
                <img
                    src={post.image}
                    className='w-full h-[400px] object-cover'
                />
                <button
                    onClick={() => !likeState ? like(post.id) : dislike(post.id)}
                    className=' p-2 flex items-center gap-2'>
                    {likeState ? <AiTwotoneLike /> : <BiLike />}
                    <span>{post.likesUserIDs.length}</span>
                </button>
            </Content>
            <section className='flex flex-col mx-5 gap-5 mb-8'>
            <h1 className='text-lg font-medium '>Comments</h1>
                <textarea ref={body} name='body' placeholder='Write...' className=' outline-none bg-gray-200 rounded p-1' />
                <button
                    onClick={() => newComment(post.id)}
                    className=' bg-mine-shaft-700 text-white py-2 rounded font-medium'>POST</button>
            </section>
            <Comments comments={post.comments} />
        </Post>
    )
}