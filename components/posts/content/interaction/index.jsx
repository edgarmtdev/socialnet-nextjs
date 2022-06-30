import { BiLike } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { AiTwotoneLike } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { dislikePost, likePost } from "../../../../features/posts";
import { InteractiveButton, SectionInteraction } from "./styles";
import { useState } from "react";

export default function Interaction({ likeState, handleLikeState, post }) {
    const dispatch = useDispatch();

    const [ numberLikes, setNumberLikes ] = useState(post.likesUserIDs.length)

    const likeOrDislike = (idPost) => {
        if (!likeState) {
            handleLikeState(true);
            dispatch(likePost({ idPost }));
            setNumberLikes(numberLikes + 1)
            return;
        }
        handleLikeState(false);
        dispatch(dislikePost({ idPost }));
        setNumberLikes(numberLikes - 1)
    };

    return (
        <SectionInteraction>
            <InteractiveButton onClick={() => likeOrDislike(post.id)}>
                {likeState ? <AiTwotoneLike /> : <BiLike />}
                <span>{numberLikes}</span>
            </InteractiveButton>
            <InteractiveButton>
                <MdOutlineInsertComment />
                <span>Comments</span>
            </InteractiveButton>
        </SectionInteraction>
    );
}
