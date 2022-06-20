import { signInWithEmailAndPassword } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import { HeadComponent } from '../../components/utils/HeadComponent';
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
            <HeadComponent title = {'Login'}/>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={login}
            >
                {({ errors }) => {
                    return <>
                        <Form className='flex flex-col mx-8 md:w-[55%] lg:w-[40%] md:mx-auto rounded-md p-7 md:p-14 gap-9'>
                            <h1 className=' text-4xl text-gray-200 font-medium '>Login</h1>

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
                                className={` bg-great-blue-400 rounded-sm p-[8px] shadow-md text-white mb-5 hover:scale-[1.02]`}
                            >
                                Sign In
                            </button>
                            <section className=' flex items-center justify-between'>
                                <div className=' h-[1px] mt-1 w-full bg-gray-400'></div>
                                <h1 className=' text-center text-base w-full text-gray-200'>Sign in with</h1>
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