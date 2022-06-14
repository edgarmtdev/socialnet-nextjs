import Comment from './Comment'

export default function Comments({ comments }) {
    return (
        <>
            {comments.length > 0 && <h1 className='text-lg font-medium mb-8'>Comments</h1>}
            <section className='mx-5 flex flex-col gap-2'>
                {comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })}
            </section>
        </>
    )
}