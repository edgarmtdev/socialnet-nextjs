import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileLayout from '../../../components/layout/people'
import ContainerPeople from '../../../components/people';
import Spinner from '../../../components/utils/Spinner';
import { sendFriendshipRequest } from '../../../features/users';

export default function AllUsers() {
    const { people, loading } = useSelector(state => state.users)
    
    if (loading) {
        return (<Spinner />)
    }

    return (
        <div className=' ml-[22%] p-10'>
            <ContainerPeople data={people} title={'All people'}/>
        </div>
    )
}

AllUsers.Layout = ProfileLayout

{/* <section className='flex gap-5 flex-wrap text-gray-200 mb-16'>
{people?.map(user => (
    <article key={user.id} className='w-[250px] h-full bg-[#2b3b45] px-5 pt-56 pb-5 rounded-lg relative'>
        <img src={user.profilePic} className=' w-full h-52 object-cover absolute top-0 left-0 rounded-t-lg ' />
        <p>{user.name}</p>
        <button onClick={() => sendFriendReq(user.id)} className=' w-full bg-great-blue-500 mt-4 p-1 text-white rounded-lg'>Add Friend</button>
    </article>
))}
</section> */}