import React from 'react'
import { useSelector } from 'react-redux'
import MyFriends from '../../components/friends';
import { HeadComponent } from '../../components/utils/HeadComponent'

export default function Friends() {
    const { friends } = useSelector(state => state.users)
    console.log(friends);
    return (
        <>
            <HeadComponent title={'Friends'} />
            {friends ?
                <MyFriends friends={friends} />
                : <p>Dont have Friends</p>}
        </>
    )
}
