import { BiLike } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { AiTwotoneLike } from 'react-icons/ai'
import { MdOutlineInsertComment } from 'react-icons/md'
import { dislikePost, likePost } from '../../../../features/posts'
import { InteractiveButton, SectionInteraction } from './styles'

export default function Interaction({ likeState, handleLikeState, post }) {

    const dispatch = useDispatch()

    const likeOrDislike = (idPost) => {
        if (!likeState) {
            handleLikeState(true)
            dispatch(likePost({ idPost }))
            return
        }
        handleLikeState(false)
        dispatch(dislikePost({ idPost }))
    }

    return (
        <SectionInteraction className='flex justify-between mt-5 border-y border-slate-500 mx-4'>
            <InteractiveButton
                onClick={() => likeOrDislike(post.id)}>
                {likeState ? <AiTwotoneLike /> : <BiLike />}
                <span>{post.likesUserIDs.length}</span>
            </InteractiveButton>
            <InteractiveButton><MdOutlineInsertComment />Comments</InteractiveButton>
        </SectionInteraction>
    )
}
