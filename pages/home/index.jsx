import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import Posts from '../../components/posts'
import { ImSpinner } from 'react-icons/im'

export default function index() {
    const { dataOfFriends, loading } = useSelector(state => state.post)
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            {!loading ?
                <Posts posts={dataOfFriends}/> :
                <ImSpinner className=' animate-spin w-6 h-6' />
            }
        </>
    )
}
