import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { login, logOut } from '../../features/auth';
import Navbar from '../Navbar/Navbar';

const Page = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            console.log(result);
            if (result) {
                dispatch(login({
                    // id: result.uid,
                    name: result.displayName,
                    email: result.email,
                    profilePic: result.photoURL,
                    provider: result.providerId,
                    idProvider: result.uid
                    
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