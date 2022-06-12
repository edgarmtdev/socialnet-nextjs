import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../config/firebase'
import { login, logOut } from '../../features/auth'
import { getPosts } from '../../features/posts'
import { getUsers } from '../../features/users'
import { getofFriends } from '../../features/posts'
import { useAuthState } from '../../hooks/useAuthState'
import Navbar from '../navbar'

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
            <main>{children}</main>
        </>
    )
}

export default Page