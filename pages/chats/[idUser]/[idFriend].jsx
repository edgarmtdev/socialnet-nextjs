import { useSelector } from 'react-redux'
import { HeadComponent } from '../../../components/utils/HeadComponent'
import MyFriends from '../../../components/friends'
import Chats from '../../../components/chats'

export default function Chat() {
    const { friends } = useSelector(state => state.users)

    return (
        <>
            <HeadComponent title={'Chat | SocialNet'} />
            <section className='flex'>
                <section>
                    {friends ?
                        <MyFriends friends={friends} />
                        :
                        <p>Dont have Friends</p>
                    }
                </section>
                <Chats />
            </section>
        </>
    )
}
