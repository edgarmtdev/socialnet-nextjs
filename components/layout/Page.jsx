import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../config/firebase'
import { login, logOut } from '../../features/auth'
import { getofFriends, getPosts } from '../../features/posts'
import { getUsers } from '../../features/users'
import Navbar from '../navbar/index'
import Spinner from '../utils/Spinner'

const Page = ({ children }) => {
    const dispatch = useDispatch()
    const { dataOfFriends, loading } = useSelector(state => state.post)

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
            {!loading && dataOfFriends ?
                <>
                    <main className='pt-20 z-[-1]'>{children}</main>
                </> :
                <Spinner />
            }
        </>
    )
}

export default Page