import { useDispatch, useSelector } from 'react-redux'
import { newPost } from '../../features/posts'
import Spinner from '../utils/Spinner'
import Posts from '../posts'
import FormComponent from '../form/posts/Form'
import { Background, CardUser, ProfileCont, Promotions } from './styles'

export default function MyProfile({ user }) {
    const createPost = (values, { setSubmitting }) => {
        dispatch(newPost(values))
    }

    console.log(user);
    return (
        <ProfileCont>
            <div>
                <CardUser>
                    <Background
                        src='https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80'
                    />
                    <img
                        src={user.profilePic}
                        className='w-36 h-36 rounded-full object-cover z-20 border-[3px]'
                    />
                    <p className='text-xl font-medium mt-10'>{user.name}</p>
                </CardUser>
                <Posts posts={user.posts} />
            </div>

            <Promotions>

            </Promotions>
        </ProfileCont>
    )
}
