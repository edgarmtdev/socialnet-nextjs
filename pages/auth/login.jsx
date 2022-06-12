import { signInWithEmailAndPassword } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SectionProvider from '../../components/form/provider/SectionProvider';
import { auth } from '../../config/firebase';

export default function Login() {

    const { logged } = useSelector(state => state.auth)
    const router = useRouter()

    const login = (values, { setSubmitting, setErrors }) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(() => setSubmitting(false))
            .catch(() => {
                setSubmitting(false)
                setErrors({
                    credentials: "Las credenciales son incorrectas"
                })
            })
    }

    useEffect(() => {
        if (logged) {
            router.replace('/home')
        }
    }, [logged])

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={login}
            >
                {({ errors }) => {
                    return <>
                        <Form className=' flex flex-col mx-8 md:w-[55%] lg:w-[40%] md:mx-auto rounded-md border-[1px] p-7 md:p-14 mt-14 gap-9 shadow-md'>
                            <h1 className=' text-3xl '>Login</h1>

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
                                Sign In
                            </button>
                            <section className=' flex items-center justify-between'>
                                <div className=' h-[1px] mt-1 w-full bg-gray-400'></div>
                                <h1 className=' text-center text-base w-full text-gray-600'>Sign in with</h1>
                                <div className=' h-[1px] mt-1 w-full bg-gray-400'></div>
                            </section>
                            <SectionProvider />
                        </Form>
                    </>
                }}
            </Formik>
        </>
    )
}