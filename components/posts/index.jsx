import Card from "./card";
import { PostContainer } from "./styles";

export default function Posts({ posts }) {
  return (
    <PostContainer>
      {posts ? (
        posts.map((post) => <Card post={post} key={post.id} />)
      ) : (
        <p>No hay posts</p>
      )}
    </PostContainer>
  );
}
