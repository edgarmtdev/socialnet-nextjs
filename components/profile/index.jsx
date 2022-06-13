import { ImSpinner10 } from 'react-icons/im'
import Posts from '../../components/posts'
import { newPost } from '../../features/posts'
import { useDispatch, useSelector } from 'react-redux'
import { Aside, Feed } from './styled'
import FormComponent from './Form'

export default function MyProfile() {
    const { data, loading } = useSelector(state => state.post)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const createPost = (values, { setSubmitting }) => {
        dispatch(newPost(values))
    }
    return (
        <>
            <Feed>
                <Aside>
                    <img src={user.profilePic}/>
                    <p>{user.name}</p>
                </Aside>

                <div>
                    <FormComponent handlePost={createPost} />
                    {!loading ?
                        <Posts posts={data} />
                        :
                        <ImSpinner10 className=' animate-spin w-6 h-6 absolute top-1/2 left-[65%]' />
                    }
                </div>
            </Feed>
        </>
    )
}
