import React from 'react'
import { useSelector } from 'react-redux'
import { HeadComponent } from '../../../components/utils/HeadComponent'
import ProfileLayout from '../../../components/layout/people'
import ContainerPeople from '../../../components/people'
import Spinner from '../../../components/utils/Spinner'

export default function RequestSent() {
    const { sendedReq, loading} = useSelector(state => state.users)

    if (loading) return (<Spinner />)

    return (
        <>
            <HeadComponent title={'Requests Sent'} />
            <div className='md:ml-[20%] p-10'>
                <ContainerPeople title={'Requests Sent'} data={sendedReq} />
            </div>
        </>
    )
}

RequestSent.Layout = ProfileLayout