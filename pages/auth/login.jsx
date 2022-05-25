import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../features/auth';

export default function Login() {

    const login = (values, API) => {
        console.log(values);
        signInWithEmailAndPassword(auth, values.email, values.password)
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={login}
            >
                <Form className=' flex flex-col w-1/2 mx-auto bg-slate-200 p-20 mt-20 gap-5'>
                    <Field type='email' name='email'  className=' p-2 rounded-xl ' />
                    <Field type='password' name='password' className=' p-2 rounded-xl ' />
                    <button type='submit'>Sign In</button>
                </Form>
            </Formik>
        </>
    )
}
