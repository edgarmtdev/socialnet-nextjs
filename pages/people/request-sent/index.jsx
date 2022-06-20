import React from 'react'
import { useSelector } from 'react-redux'
import ProfileLayout from '../../../components/layout/people'

export default function RequestSent() {
    const { sendedReq } = useSelector(state => state.users)
    return (
        <div className=' ml-[20%] p-10'>
            <h1 className=' text-xl text-white mb-10 font-medium'>Friednship Requests</h1>
            <section className='flex gap-5 flex-wrap text-gray-200 mb-16'>
                {sendedReq?.map(user => (
                    <article key={user.id} className='w-[250px] h-full bg-[#2b3b45] px-5 pt-56 pb-5 rounded-lg relative'>
                        <img src={user.profilePic} className=' w-full h-52 object-cover absolute top-0 left-0 rounded-t-lg ' />
                        <p>{user.name}</p>
                        <button onClick={() => deleteRequest(user.id)} className=' w-full bg-red-500 mt-4 p-1 text-white rounded-lg'>Delete</button>
                    </article>
                ))}
            </section>
        </div>
    )
}

RequestSent.Layout = ProfileLayout