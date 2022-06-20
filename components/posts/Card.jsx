import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { addComment, dislikePost, likePost } from '../../features/posts'
import Comments from './comments'
import { BiLike } from 'react-icons/bi'
import { AiTwotoneLike } from 'react-icons/ai'
import { MdOutlineInsertComment } from 'react-icons/md'
import { Author, Content, Post } from './styles'

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
        setLikeState(true)
        dispatch(likePost({ idPost }))
    }

    const dislike = (idPost) => {
        setLikeState(false)
        dispatch(dislikePost({ idPost }))
    }

    return (
        <Post>
            <Link href={`/profile/${post.author.id}`}>
                <Author>
                    <img
                        src={post.author.profilePic}
                        className='w-10 h-10 rounded-full object-cover hover:opacity-50'
                    />
                    <p className='flex flex-col hover:underline'>{post.author.name}</p>
                    <span className='text-sm font-extralight text-gray-400 hidden md:block'>{post.createdAt.split('T')[0]}</span>
                </Author>
            </Link>
            <Content>
                <ReactMarkdown className='my-5 text-sm px-[20px] prose text-stone-200'>{post.content}</ReactMarkdown>
                <img
                    src={post.image}
                    className='w-full h-[400px] object-cover'
                />
                <section className=' flex justify-between mt-5 border-y border-slate-500 mx-4'>
                    <button
                        onClick={() => !likeState ? like(post.id) : dislike(post.id)}
                        className=' p-2 flex items-center justify-center gap-2 mx-auto hover:bg-slate-700 w-full m-1 rounded-lg'>
                        {likeState ? <AiTwotoneLike /> : <BiLike />}
                        <span>{post.likesUserIDs.length}</span>
                    </button>
                    <button
                        className=' p-2 flex items-center justify-center gap-2 mx-auto hover:bg-slate-700 w-full m-1 rounded-lg'>
                        <MdOutlineInsertComment />
                        <span>Comments</span>
                    </button>
                </section>
            </Content>
            <section className='flex flex-col mx-5 gap-5 mb-8'>
                <h1 className='text-lg font-medium '>Comments</h1>
                <textarea ref={body} name='body' placeholder='Write...' className=' outline-none rounded-full py-1 px-5 bg-[#4b565d5a]' />
                <button
                    onClick={() => newComment(post.id)}
                    className=' bg-mine-shaft-700 text-white py-2 rounded font-medium'>POST</button>
            </section>
            <Comments comments={post.comments} />
        </Post>
    )
}