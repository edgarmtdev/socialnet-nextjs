import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { getofFriends, getPosts } from '../../features/posts'
import { login, logOut } from '../../features/auth'
import { getUsers } from '../../features/users'
import Navbar from '../navbar/index'

const Page = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                dispatch(login({
                    name: result.displayName,
                    email: result.email,
                    profilePic: result.photoURL,
                    provider: result.providerId,
                    idProvider: result.uid
                }))
                    .then(() => {
                        dispatch(getPosts())
                        dispatch(getUsers())
                        dispatch(getofFriends())
                    })
            } else {
                dispatch(logOut())
            }
        })
    }, [])
    return (
        <>
            <Navbar />
            <main className='pt-20 z-[-1]'>{children}</main>
        </>
    )
}

export default Page