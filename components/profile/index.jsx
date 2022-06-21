import FormComponent from '../form/posts/Form'
import Posts from '../posts'
import Link from 'next/link'
import { Background, CardUser, ProfileCont, Aside, NumberFriend } from './styles'

export default function MyProfile({ user }) {
    return (
        <ProfileCont>
            <div>
                <CardUser>
                    <Background
                        src={user.background}
                    />
                    <img
                        src={user.profilePic}
                        className='w-36 h-36 rounded-full object-cover z-20 border-[3px]'
                    />
                    <p className='text-xl font-medium mt-10'>{user.name}</p>
                    <Link href={'/friends'}>
                        <NumberFriend>{user.friends.length} friends</NumberFriend>
                    </Link>
                </CardUser>
                <FormComponent />
                <Posts posts={user.posts} />
            </div>

            <Aside>
                <h1 className=' text-white text-xl mb-5 font-medium'>Friends</h1>
                <ol className=' grid grid-cols-4'>
                    {user.friends.map(friend => {
                        return (
                            <Link href={'/profile/' + friend.id} key={friend.id}>
                                <li className='flex flex-col items-center text-white hover:underline hover:opacity-80 cursor-pointer'>
                                    <img src={friend.profilePic} className=' w-16 h-16 object-cover rounded-lg' />
                                    <p>{friend.name.split(' ')[0]}</p>
                                </li>
                            </Link>
                        )
                    }
                    )}
                </ol>
            </Aside>
        </ProfileCont>
    )
}
