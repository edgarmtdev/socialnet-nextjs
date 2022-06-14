import Comment from './Comment'

export default function Comments({ comments }) {
    return (
        <section className='mx-5'>
            {comments.length > 0 && <h1 className='text-lg font-medium mx-4'>Comments</h1>}
                {comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment}/>
                    )
                })}
        </section>
    )
}