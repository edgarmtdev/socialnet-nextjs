import { Field, Form, Formik } from 'formik'
import SectionProvider from '../form/provider/SectionProvider'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FieldStyled } from './field/styles'


export default function AuthForm() {

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

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={login}
        >
            {({ errors }) => {
                return <>
                    <Form className='flex flex-col mx-8 pt-4 md:w-[50%] lg:w-[40%] md:mx-auto rounded-md gap-7'>
                        <h1 className='text-4xl text-gray-200 font-normal'>Login</h1>

                        {errors && <p className='text-red-500 text-center'>{errors.credentials}</p>}

                        <FieldStyled 
                            placeholder='Enter your email'
                            type='email'
                            name='email'
                        />
                        <FieldStyled
                            placeholder='Enter your password'
                            type='password'
                            name='password'
                        />
                        <button
                            type='submit'
                            className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-laic-500 rounded p-[5px] text-white mb-5 hover:scale-[1.02]`}
                        >
                            Sign In
                        </button>
                        <section className='flex items-center justify-between'>
                            <div className='h-[1px] mt-1 w-full bg-gray-500'></div>
                            <h1 className='text-center text-sm w-full text-gray-400'>Sign in with</h1>
                            <div className='h-[1px] mt-1 w-full bg-gray-500'></div>
                        </section>
                        <SectionProvider />
                    </Form>
                </>
            }}
        </Formik>
    )
}
