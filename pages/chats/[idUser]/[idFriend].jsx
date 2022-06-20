import { useSelector } from 'react-redux'
import { HeadComponent } from '../../../components/utils/HeadComponent'
import Chats from '../../../components/chats'
import Link from 'next/link'

export default function Chat() {
    const { friends } = useSelector(state => state.users)
    const { user: { idUser } } = useSelector(state => state.auth)

    return (
        <>
            <HeadComponent title={'Chat | SocialNet'} />
            <section className='flex'>
                <section className=' bg-[#212e36] md:w-[20%] h-screen fixed top-0 pt-24 z-9 '>
                    {friends.map(friend => {
                        return (
                            <Link key={friend.id}  href={`/chats/${idUser}/${friend.id}`}>
                                <div className=' flex text-white items-center gap-5 hover:bg-slate-700 px-4 cursor-pointer w-full'>
                                    <img src={friend.profilePic} alt="" className='w-10 h-10 rounded-full object-cover my-2' />
                                    <p className=' hidden md:block'>{friend.name}</p>
                                </div>
                            </Link>
                        )
                    })}
                </section>
                <Chats />
            </section>
        </>
    )
}
