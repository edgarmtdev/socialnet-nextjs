import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebase'
import { FormStyled } from '../form/styles'
import { FieldStyled } from '../field/styles'
import { ButtonAuth, Title } from '../styles'
import { Formik } from 'formik'
import SectionProvider from '../../form/provider/SectionProvider'
import BarSignIn from '../bar'


export default function LoginModule() {

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
        <Formik initialValues={{ email: '', password: '' }}
            onSubmit={login}
        >
            {({ errors }) => {
                return <>
                    <FormStyled>
                        <Title>Login</Title>
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
                        <ButtonAuth type='submit'>Sign In</ButtonAuth>
                        <BarSignIn />
                        <SectionProvider />
                    </FormStyled>
                </>
            }}
        </Formik>
    )
}