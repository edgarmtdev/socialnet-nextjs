import ReactMarkdown from "react-markdown";
import { ContentSection } from "./styles";
import Interaction from "./interaction";

export default function Content({ likeState, handleLikeState, post }) {
  return (
    <ContentSection>
      <ReactMarkdown className="my-5 text-xs px-[20px] prose prose-invert text-stone-200">
        {post.content}
      </ReactMarkdown>
      <img src={post.image} className="w-full h-[300px] object-cover" />
      <Interaction
        likeState={likeState}
        handleLikeState={handleLikeState}
        post={post}
      />
    </ContentSection>
  );
}
