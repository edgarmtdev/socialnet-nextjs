import React from 'react'
import { useSelector } from 'react-redux'

export default function index() {
    const { people } = useSelector(state => state.users)
    return (
        <div className=' ml-[20%] p-10'>
            <section>
                <h1 className=' text-lg font-medium'>All people</h1>
                {people?.map(user => (
                    <article key={user.id}>
                        <p>{user.name}</p>
                        <img src={user.profilePic} className=' w-20 h-20 object-cover rounded-full' />
                        <button onClick={() => sendFriendReq(user.id)}>Add Friend</button>
                    </article>
                ))}
            </section>
        </div>
    )
}
