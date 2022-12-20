import Comment from "./comment";
import { SectionComment } from "./styles";

export default function Comments({ comments }) {
  return (
    <SectionComment>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </SectionComment>
  );
}
