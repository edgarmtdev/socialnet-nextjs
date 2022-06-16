import Comment from './Comment'

export default function Comments({ comments }) {
    return (
        <>
            <section className='mx-5 flex flex-col gap-2 mb-5'>
                {comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })}
            </section>
        </>
    )
}