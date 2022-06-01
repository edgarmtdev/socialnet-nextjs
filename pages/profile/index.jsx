import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function Profile() {

    const createPost = (values, { setSubmitting }) => {
        console.log(values);
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
