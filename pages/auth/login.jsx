import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { auth } from '../../config/firebase';
import SectionProvider from '../../components/form/provider/SectionProvider';

export default function Login() {

    const { logged } = useSelector(state => state.auth)
    const router = useRouter()

    const login = (values, { setSubmitting, setErrors }) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(res => setSubmitting(false))
            .catch(err => {
                setSubmitting(false)
                setErrors({
                    credentials: "Las credenciales son incorrectas"
                })
            })
    }

    useEffect(() => {
        if (logged) {
            router.replace('/')
        }
    }, [logged])

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={login}
            >
                {({ errors, isSubmitting }) => {
                    return <>
                        <Form className=' flex flex-col mx-3 md:w-1/3 md:mx-auto bg-slate-200 p-7 md:p-14 mt-10 gap-8 shadow-xl'>
                            <h1 className=' text-4xl font-light'>Login</h1>

                            <div className=' h-[1px] bg-gray-400'></div>

                            {errors && <p className='text-red-500 text-center '>{errors.credentials}</p>}

                            <Field placeholder='Email' type='email' name='email' className=' p-2 outline-none' />
                            <Field placeholder='Password' type='password' name='password' className=' p-2  outline-none ' />
                            <button
                                type='submit'
                                className={`bg-blue-600 p-2 shadow-md text-white text-xl mb-5 hover:bg-blue-500`}
                            >
                                Sign In
                            </button>

                            <div className=' h-[1px] bg-gray-400'></div>

                            <h1 className=' text-center text-lg'>SignIn with</h1>

                            <SectionProvider />
                        </Form>
                    </>
                }}
            </Formik>
        </>
    )
}
