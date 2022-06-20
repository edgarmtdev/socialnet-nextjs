import { useDispatch, useSelector } from 'react-redux';
import { HeadComponent } from '../../components/utils/HeadComponent';
import Spinner from '../../components/utils/Spinner';
import { acceptFriendshipRequest, sendFriendshipRequest } from '../../features/users';

export default function People({ children }) {
    const { people, receivedReq, sendedReq, loading } = useSelector(state => state.users)
    const dispatch = useDispatch()

    const sendFriendReq = (idUser) => {
        dispatch(sendFriendshipRequest({
            idFriend: idUser
        }))
    }

    const acceptFriend = (idUser) => {
        dispatch(acceptFriendshipRequest({
            idFriend: idUser, accepted: true
        }))
    }

    const deleteRequest = (idUser) => {
        dispatch(acceptFriendshipRequest({
            idFriend: idUser, accepted: false
        }))
    }

    if (loading) {
        return (<Spinner />)
    }

    return (
        <div className=' max-w-screen-xl mx-auto'>
            <HeadComponent title={'People'} />

            <div className='p-10'>
                <h1 className='text-xl text-white mb-10 font-medium'>All people</h1>
                <section className='flex gap-5 text-gray-200 mb-16'>
                    {people?.map(user => (
                        <article key={user.id} className='w-1/5 h-full bg-[#2b3b45] px-5 pt-56 pb-5 rounded-lg relative'>
                            <img src={user.profilePic} className=' w-full h-52 object-cover absolute top-0 left-0 rounded-t-lg ' />
                            <p>{user.name}</p>
                            <button onClick={() => sendFriendReq(user.id)} className=' w-full bg-great-blue-500 mt-4 p-1 text-white rounded-lg'>Add Friend</button>
                        </article>
                    ))}
                </section>
                <section>
                    <h1 className=' text-lg font-medium'>Friendship request sended</h1>
                    {sendedReq?.map(user => (
                        <article key={user.id}>
                            <p>{user.name}</p>
                            <img src={user.profilePic} className=' w-20 h-20 object-cover rounded-full' />
                        </article>
                    ))}
                </section>
                <section>
                    <h1 className=' text-lg font-medium'>Friendship request</h1>
                    {receivedReq?.map(user => (
                        <article key={user.id}>
                            <p>{user.name}</p>
                            <img src={user.profilePic} className=' w-20 h-20 object-cover rounded-full' />
                            <button onClick={() => acceptFriend(user.id)}>Accept</button>
                            <button onClick={() => deleteRequest(user.id)}>Delete</button>
                        </article>
                    ))}
                </section>
            </div>


        </div>
    )
}


// <div className='bg-[#212e36] w-[20%] h-screen fixed z-1 top-0 border-r-[1px] border-gray-600 pt-32 px-2 text-white'>
// <ul>
//     <Link href={'/people/allusers'}>
//         <li className=' px-4 py-3 rounded-lg bg-slate-900 cursor-pointer'>All</li>
//     </Link>
// </ul>
// </div>