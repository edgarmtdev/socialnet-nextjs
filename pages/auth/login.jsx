import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    GithubAuthProvider
} from 'firebase/auth'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { auth } from '../../config/firebase';

const googleProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider()
const ghProvider = new GithubAuthProvider()

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

    const logInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const logInFacebook = () => {
        signInWithPopup(auth, fbProvider)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const logInGithub = () => {
        signInWithPopup(auth, ghProvider)
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
                        <Form className=' flex flex-col w-2/3 md:w-1/2 mx-auto bg-slate-200 p-10 md:p-20 mt-20 gap-5 rounded-2xl shadow-xl'>
                            <h1 className=' text-xl '>Login</h1>
                            <Field placeholder='Email' type='email' name='email' className=' p-2 rounded-xl outline-none ' />
                            <Field placeholder='Password' type='password' name='password' className=' p-2 rounded-xl outline-none ' />
                            <button
                                type='submit'
                                className={`bg-blue-600 p-2 rounded-xl shadow-md text-white font-medium`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={logInGoogle}
                                className={`bg-white p-2 rounded-xl shadow-md font-medium`}
                            >
                                Sign In with Google
                            </button>
                            <button
                                onClick={logInFacebook}
                                className={`bg-white p-2 rounded-xl shadow-md font-medium`}
                            >
                                Sign In with Facebook
                            </button>
                            <button
                                onClick={logInGithub}
                                className={`bg-white p-2 rounded-xl shadow-md font-medium`}
                            >
                                Sign In with Github
                            </button>
                        </Form>
                        {errors && <p>{errors.credentials}</p>}
                    </>
                }}
            </Formik>
        </>
    )
}
