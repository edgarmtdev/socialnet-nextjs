import React from 'react'
import { useSelector } from 'react-redux'
import { HeadComponent } from '../../../components/utils/HeadComponent'
import ProfileLayout from '../../../components/layout/people'
import ContainerPeople from '../../../components/people'
import Spinner from '../../../components/utils/Spinner'

export default function FriendShipRequest() {
    const { receivedReq, loading } = useSelector(state => state.users)

    if (loading) return (<Spinner />)

    return (
        <>
            <HeadComponent title={'Friendship request'} />
            <div className=' ml-[20%] p-10'>
                {receivedReq.length > 0 ?
                    <ContainerPeople title={'Friendship request'} data={receivedReq} /> :
                    <div className=' w-full h-[80vh] flex items-center justify-center'>
                        <p className=' text-xl text-slate-400'>No requests</p>
                    </div>
                }
            </div>
        </>
    )
}

FriendShipRequest.Layout = ProfileLayout