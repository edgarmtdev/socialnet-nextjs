import Comment from './comment'

export default function Comments({ comments }) {
    return (
        <>
            <section className='mx-5 flex flex-col gap-2 mb-5 text-sm'>
                {comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })}
            </section>
        </>
    )
}