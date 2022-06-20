import React from 'react'
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
                    src='https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80' 
                    className=' bg-mine-shaft-600 h-[15%] w-full absolute top-0 rounded-t-lg object-cover'/>
                <img
                    src={user.profilePic}
                    className='w-24 h-24 rounded-full object-cover z-[1] border-[3px]'
                />
                <p className='text-lg font-medium'>{user.name}</p>
            </Aside>
            <div className=' w-full'>
                <FormComponent />
                {!loading ?
                    <Posts posts={dataOfFriends} />
                    :
                    <Spinner />
                }
            </div>
            <Aside>
                
            </Aside>
        </Feed>
    )
}
