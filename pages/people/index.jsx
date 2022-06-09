import Head from 'next/head';
import { useSelector } from 'react-redux';
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
    const { users, loading } = useSelector(state => state.users)
    if (loading) {
        return (<p>Loading....</p>)
    }

    return (
        <div>
            <Head>
                <title>People</title>
            </Head>
            <section>
                {users?.map(user => (
                    <article key={user.id}>
                        <p>{user.name}</p>
                        <img src={user.profilePic} />
                    </article>
                ))}
            </section>
        </div>
    )
}
