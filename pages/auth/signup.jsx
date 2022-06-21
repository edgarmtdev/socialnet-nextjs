import { useEffect } from 'react'
import { HeadComponent } from '../../components/utils/HeadComponent'
import { Field, Form, Formik } from 'formik'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { newUser } from '../../features/auth'

export default function signup() {

    const { logged } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        if (logged) {
            router.replace('/home')
        }
    }, [logged])

    const signup = (values, { setSubmitting, setErrors }) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: values.name,
                    photoURL: values.profilePic,
                })
                console.log(result);
                dispatch(newUser({
                    name: values.displayName,
                    email: values.email,
                    profilePic: values.photoURL,
                    provider: result.providerId,
                    idProvider: result.uid,
                    background: values.background
                }))
            })
    }

    return (
        <>
            <HeadComponent title={'Register'} />
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={signup}
            >
                {({ errors }) => {
                    return <>
                        <Form className='flex flex-col mx-8 md:w-[55%] lg:w-[40%] md:mx-auto rounded-md p-7 md:p-14 gap-9 '>
                        <h1 className='text-4xl text-gray-200 font-medium '>No acount?, Register now!</h1>
                            {errors && <p className='text-red-500 text-center '>{errors.credentials}</p>}
                            <Field
                                placeholder='Enter your name'
                                type='text'
                                name='name'
                                className='bg-slate-200 shadow-md p-2 outline-none text-sm rounded-sm text-slate-600'
                            />
                            <Field
                                placeholder='Enter your profile picture'
                                type='text'
                                name='profilePic'
                                className='bg-slate-200 shadow-md p-2 outline-none text-sm rounded-sm text-slate-600'
                            />
                            <Field
                                placeholder='Enter your background page'
                                type='text'
                                name='background'
                                className='bg-slate-200 shadow-md p-2 outline-none text-sm rounded-sm text-slate-600'
                            />
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
                                className={` bg-great-blue-400 rounded-sm p-[8px] shadow-md text-white mb-5 hover:scale-[1.02]`}
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
