import React from 'react'
import Head from 'next/head'
import MyFeed from '../../components/home'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <MyFeed />
        </>
    )
}
