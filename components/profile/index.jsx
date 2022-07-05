import { useSelector } from 'react-redux'
import FormComponent from '../form/posts/Form'
import Posts from '../posts'
import ProfilePic from '../utils/ProfilePic'
import Friends from './friends'
import { Aside, Background, CardUser, Name, NumberFriend, ProfileCont } from './styles'

export default function MyProfile({ user }) {
    const { user: auth } = useSelector(state => state.auth)
    return (
        <ProfileCont>
            <div>
                <CardUser>
                    <Background src={user.background} />
                    <ProfilePic src={user.profilePic} size={'4xl'} />
                    <Name>{user.name}</Name>
                    <NumberFriend>{user.friends.length} friends</NumberFriend>
                </CardUser>
                {auth.idUser === user.id && <FormComponent />}
                <Posts posts={user.posts} />
            </div>
            <Aside>
                <Friends friends={user.friends} />
            </Aside>
        </ProfileCont>
    )
}
