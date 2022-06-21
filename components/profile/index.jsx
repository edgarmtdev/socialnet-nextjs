import FormComponent from '../form/posts/Form'
import Posts from '../posts'
import { Background, CardUser, ProfileCont, Promotions } from './styles'

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
                </CardUser>
                <FormComponent />
                <Posts posts={user.posts} />
            </div>

            <Promotions>

            </Promotions>
        </ProfileCont>
    )
}
