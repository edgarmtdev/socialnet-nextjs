import Head from 'next/head'
import Post from '../../components/posts'
import { Field, Form, Formik } from 'formik'
import { ImSpinner10 } from 'react-icons/im'
import { newPost } from '../../features/posts'
import { useDispatch, useSelector } from 'react-redux'

export default function Profile() {

    const { data, loading } = useSelector(state => state.post)
    const dispatch = useDispatch()

    const createPost = (values, { setSubmitting }) => {
        dispatch(newPost(values))
    }

    if (loading) return (<section className='h-screen flex justify-center items-center'>
        <ImSpinner10 className=' animate-spin w-10 h-10' />
    </section>)

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <div>
                <h1>My Profile</h1>
                <Formik
                    onSubmit={createPost}
                    initialValues={{
                        content: '',
                        image: ''
                    }}>
                    <Form>
                        <Field name='content' type='text' placeholder='Write...' />
                        <Field name='image' type='text' placeholder='Image' />
                        <button type='submit'>POST</button>
                    </Form>
                </Formik>

                <section className=' mx-auto w-full'>
                    {data.map(post => (<Post post={post} key={post.id} />))}
                </section>
            </div>
        </>
    )
}
