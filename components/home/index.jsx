import Posts from '../../components/posts'
import FormComponent from '../form/posts/Form'
import ProfilePic from '../utils/ProfilePic'
import Spinner from '../utils/Spinner'
import { Aside, Background, Feed, Name } from './styles'

export default function MyFeed({ dataOfFriends, user }) {

    return (
        <Feed>
            <Aside>
                <Background
                    src={user.background ||
                        'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80'
                    } />
                <ProfilePic size={'xl'} src={user.profilePic} />
                <Name>{user.name}</Name>
            </Aside>
            <div className='w-full'>
                <FormComponent />
                {dataOfFriends ? <Posts posts={dataOfFriends} /> : <Spinner />}
            </div>
            <Aside></Aside>
        </Feed>
    )
}
