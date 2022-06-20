import React from 'react'
import { useSelector } from 'react-redux'
import ProfileLayout from '../../../components/layout/people'
import ContainerPeople from '../../../components/people'

export default function RequestSent() {
    const { sendedReq } = useSelector(state => state.users)
    return (
        <div className='md:ml-[20%] p-10'>
            <ContainerPeople title={'Requests Sent'} data={sendedReq}/>
        </div>
    )
}

RequestSent.Layout = ProfileLayout