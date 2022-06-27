import React from 'react'
import { useSelector } from 'react-redux'
import Posts from '../../components/posts'
import { Aside, Background, Feed, Name } from './styles'
import FormComponent from '../form/posts/Form'
import Spinner from '../utils/Spinner'
import ProfilePic from '../utils/ProfilePic'

export default function MyFeed() {

    const { dataOfFriends, loading } = useSelector(state => state.post)
    const { user } = useSelector(state => state.auth)

    return (
        <Feed>
            <Aside>
                <Background src={user.background} />
                <ProfilePic size={'xl'} src={user.profilePic} />
                <Name>{user.name}</Name>
            </Aside>
            <div className='w-full'>
                <FormComponent />
                {!loading ? <Posts posts={dataOfFriends} /> : <Spinner />}
            </div>
            <Aside></Aside>
        </Feed>
    )
}
