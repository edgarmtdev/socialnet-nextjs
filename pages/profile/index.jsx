import Head from 'next/head'
import MyProfile from '../../components/profile'

export default function Profile() {

    return (
        <>
            <Head>
                <title>Feed | SocialNet</title>
            </Head>
            <MyProfile/>
        </>
    )
}
