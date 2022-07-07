import { HeadComponent } from '../../components/utils/HeadComponent'
import { Field, Form, Formik } from 'formik'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { useDispatch } from 'react-redux'
import { updateProviders } from '../../features/auth'
import { useAuthState } from '../../hooks/useAuthState'
import axios from 'axios'

export default function Signup() {
    const dispatch = useDispatch()

    useAuthState('/home')

    const signup = async (values, { setSubmitting, setErrors }) => {
        const newUser = await axios.post('/api/auth/signup', values)

        if (newUser.data.id) {
            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: values.name,
                    photoURL: values.profilePic,
                })
                dispatch(updateProviders({
                    id: newUser.data.id,
                    provider: result.user.providerId,
                    idProvider: result.user.uid,
                }))
            })
        }
    }

    return (
        <>
            <HeadComponent title={'Register'} />
            <Formik
                initialValues={{
                    name: '',
                    profilePic: '',
                    background: '',
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
