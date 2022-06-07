import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import posts, { newPost } from '../../features/posts';
import Head from 'next/head';

export default function Profile() {

    const { data, loading } = useSelector(state => state.post)
    const dispatch = useDispatch()

    console.log(data);

    const createPost = (values, { setSubmitting }) => {
        console.log(values);
        dispatch(newPost(values))
    }

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

                <section>
                    {data.map(post => {
                        return (<article key={1}>
                            <p>{post.content}</p>
                            <img src={post.image} alt="" />
                        </article>)
                    })}
                </section>
            </div>
        </>
    )
}
