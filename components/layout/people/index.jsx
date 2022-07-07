import React from 'react'
import { useEffect } from 'react'
import Navigation from './navigation'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../../features/users'

export default function ProfileLayout({ children }) {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getUsers())
    // }, [])

    return (
        <>
           <Navigation />
            <div>{children}</div>
        </>
    )
}
