import Card from './card';

export default function Posts({ posts }) {
    return (
        <section className='mx-auto w-full my-10'>
            {posts ? posts.map(post => (<Card post={post} key={post.id} />)) : <p>no hay posts</p>}
        </section>
    )
}
