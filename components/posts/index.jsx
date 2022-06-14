import Card from './Card';

export default function Posts({ posts }) {
    return (
        <section className=' mx-auto w-full my-10'>
            {posts.map(post => (<Card post={post} key={post.id} />))}
        </section>
    )
}
