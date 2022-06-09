import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import React from 'react'

export default function signup() {

    const signup = () => { }

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={signup}
            >
                {({ errors }) => {
                    return <>
                        <Form className=' flex flex-col mx-8 md:w-[55%] lg:w-[40%] md:mx-auto rounded-md border-[1px] p-7 md:p-14 mt-14 gap-9 shadow-md'>
                            <h1 className=' text-3xl '>Register</h1>
                            {errors && <p className='text-red-500 text-center '>{errors.credentials}</p>}

                            <Field
                                placeholder='Enter your email'
                                type='email'
                                name='email'
                                className='  bg-slate-200 shadow-md p-2 outline-none text-sm rounded-sm text-slate-600'
                            />
                            <Field
                                placeholder='Enter your password'
                                type='password'
                                name='password'
                                className=' bg-slate-200 shadow-md p-2 outline-none text-sm rounded-sm text-gray-600'
                            />
                            <button
                                type='submit'
                                className={` bg-mine-shaft-600 rounded-sm p-[8px] shadow-md text-white text-base mb-5 hover:opacity-95`}
                            >
                                Sign Up
                            </button>
                        </Form>
                    </>
                }}
            </Formik>
        </>
    )
}
