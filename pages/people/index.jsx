import axios from 'axios';
import Head from 'next/head';

export async function getServerSideProps(context) {
    const host = context.req.headers.host
    const secure = context.req.connection.encrypted
    const { data: users } = await axios.get(`${secure ? "https" : "http"}://${host}/api/users/all`)
    return {
        props: {
            users
        }
    }
}

export default function People({ users }) {
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
