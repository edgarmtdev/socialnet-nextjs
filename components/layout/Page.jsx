import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../../features/auth';
import Navbar from '../Navbar/Navbar';

const Page = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                dispatch(logIn({
                    id: result.uid,
                    name: result.displayName,
                    email: result.email,
                    profilePic: result.photoURL
                }))
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