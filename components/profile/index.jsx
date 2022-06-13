import { useDispatch, useSelector } from 'react-redux'
import { newPost } from '../../features/posts'
import Posts from '../../components/posts'
import FormComponent from '../form/posts/Form'
import { Feed } from './styles'
import Spinner from '../utils/Spinner'

export default function MyProfile() {
    const { data, loading } = useSelector(state => state.post)
    const dispatch = useDispatch()

    const createPost = (values, { setSubmitting }) => {
        dispatch(newPost(values))
    }
    return (
        <Feed>
            <FormComponent handlePost={createPost} />
            {!loading ?
                <Posts posts={data} />
                :
                <Spinner />
            }
        </Feed>
    )
}
