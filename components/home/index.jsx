import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Posts from '../../components/posts'
import { Aside, Feed } from './styles'
import FormComponent from '../form/posts/Form'
import Spinner from '../utils/Spinner'

export default function MyFeed() {

    const { dataOfFriends, loading } = useSelector(state => state.post)
    const { user } = useSelector(state => state.auth)


    return (
        <Feed>
            <Aside>
                <img
                    src={user.profilePic}
                    className='w-36 rounded-full'
                />
                <p className='text-lg font-medium'>{user.name}</p>
            </Aside>
            <div>
                <FormComponent />
                {!loading ?
                    <Posts posts={dataOfFriends} />
                    :
                    <Spinner />
                }
            </div>
        </Feed>
    )
}
