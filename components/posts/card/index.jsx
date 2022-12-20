import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../features/posts";
import Comments from "../comments";
import { Post } from "./styles";
import Author from "../author";
import Content from "../content";

export default function Card({ post }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const body = useRef();
  const [likeState, setLikeState] = useState(false);

  const newComment = (idPost) => {
    if (body.current.value) {
      dispatch(
        addComment({
          body: body.current.value,
          idPost,
        })
      );
      body.current.value = "";
    } else {
      console.log("No");
    }
  };

  useEffect(() => {
    post.likesUserIDs.forEach((likeID) => {
      if (likeID === user.idUser) {
        setLikeState(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Post>
      <Author post={post} />
      <Content
        likeState={likeState}
        post={post}
        handleLikeState={setLikeState}
      />

      <section className="flex flex-col mx-5 gap-5 mb-8">
        <h1 className="font-medium ">Comments</h1>
        <textarea
          ref={body}
          name="body"
          placeholder="Write..."
          className="outline-none rounded-md py-1 px-5 bg-[#4b565d5a] text-xs"
        />
        <button
          onClick={() => newComment(post.id)}
          className=" bg-mine-shaft-700 text-white py-1 rounded font-medium"
        >
          POST
        </button>
      </section>
      <Comments comments={post.comments} />
    </Post>
  );
}
