import { useDispatch, useSelector } from 'react-redux';
import { HeadComponent } from '../../components/utils/HeadComponent';
import Spinner from '../../components/utils/Spinner';
import { acceptFriendshipRequest, sendFriendshipRequest } from '../../features/users';

export default function People() {
    const {  people , receivedReq, sendedReq, loading } = useSelector(state => state.users)
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
        <div>
            <HeadComponent title={'People'}/>
            <section>
                <h1 className=' text-lg font-medium'>All people</h1>
                {people?.map(user => (
                    <article key={user.id}>
                        <p>{user.name}</p>
                        <img src={user.profilePic} className=' w-20 h-20 object-cover rounded-full'/>
                        <button onClick={() => sendFriendReq(user.id)}>Add Friend</button>
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
                        <img src={user.profilePic} className=' w-20 h-20 object-cover rounded-full'/>
                        <button onClick={() => acceptFriend(user.id)}>Accept</button>
                        <button onClick={() => deleteRequest(user.id)}>Delete</button>
                    </article>
                ))}
            </section>
        </div>
    )
}
