import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { newPost } from '../../features/posts';

export default function Profile() {

    const dispatch = useDispatch()

    const createPost = (values, { setSubmitting }) => {
        console.log(values);
        dispatch(newPost(values))
    }

    return (
        <div>
            <h1>My Profile</h1>
            <Formik
                onSubmit={createPost}
                initialValues={{
                    content:'',
                    image:''
                }}>
                <Form>
                    <Field name='content' type='text' placeholder='Write...' />
                    <Field name='image' type='text' placeholder='Image' />
                    <button type='submit'>POST</button>
                </Form>
            </Formik>
        </div>
    )
}
