import { useDispatch, useSelector } from 'react-redux';
import ProfileLayout from '../../components/layout/people';
import { HeadComponent } from '../../components/utils/HeadComponent';
import Spinner from '../../components/utils/Spinner';

export default function People() {
    const { people, receivedReq, sendedReq, loading } = useSelector(state => state.users)
    const dispatch = useDispatch()

    if (loading) {
        return (<Spinner />)
    }

    return (
        <div className=' ml-[20%]'>
            <HeadComponent title={'People'} />

            <div className='p-10'>
                {people.length !== 0 && <h1 className='text-xl text-white mb-10 font-medium'>All people</h1>}
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

People.Layout = ProfileLayout