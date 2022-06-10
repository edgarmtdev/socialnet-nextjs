import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { sendFriendshipRequest } from '../../features/users';
import { useAuthState } from '../../hooks/useAuthState';

// export async function getServerSideProps(context) {
//     const host = context.req.headers.host
//     const secure = context.req.connection.encrypted

//     const { data: users } = await axios.get(`${secure ? "https" : "http"}://${host}/api/users/all`)
//     return {
//         props: {
//             users
//         }
//     }
// }

export default function People() {
    const { users: { people }, receivedReq, sendedReq, loading } = useSelector(state => state.users)

    const dispatch = useDispatch()

    const sendFriendReq = (idUser) => {
        dispatch(sendFriendshipRequest({
            idFriend: idUser
        }))
    }

    if (loading) {
        return (<p>Loading....</p>)
    }

    return (
        <div>
            <Head>
                <title>People</title>
            </Head>
            <section>
                <h1>All people</h1>
                {people?.map(user => (
                    <article key={user.id}>
                        <p>{user.name}</p>
                        <img src={user.profilePic} />
                        <button onClick={() => sendFriendReq(user.id)}>Add Friend</button>
                    </article>
                ))}
            </section>
            <section>
                <h1>Friendship request sended</h1>
                {sendedReq?.map(user => (
                    <article key={user.id}>
                        <p>{user.name}</p>
                        <img src={user.profilePic} />
                        <button onClick={() => sendFriendReq(user.id)}>Add Friend</button>
                    </article>
                ))}
            </section>
            <section>
                <h1>Friendship request</h1>
                {receivedReq?.map(user => (
                    <article key={user.id}>
                        <p>{user.name}</p>
                        <img src={user.profilePic} />
                        <button onClick={() => sendFriendReq(user.id)}>Add Friend</button>
                    </article>
                ))}
            </section>
        </div>
    )
}
