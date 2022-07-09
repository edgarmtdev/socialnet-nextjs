import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../../config/firebase'
import { FormStyled } from '../form/styles'
import { FieldStyled } from '../field/styles'
import { ButtonAuth, Title } from '../styles'
import { Formik } from 'formik'
import SectionProvider from '../../form/provider/SectionProvider'
import BarSignIn from '../bar'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { updateProviders } from '../../../features/auth'

export default function SignupModule() {

    const dispatch = useDispatch()

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
                    <FormStyled>
                        <Title>Register now!</Title>
                        {errors && <p className='text-red-500 text-center'>{errors.credentials}</p>}
                        <FieldStyled
                            placeholder='Enter your name...'
                            type='text'
                            name='name'
                        />
                        <FieldStyled
                            placeholder='Enter your profile picture...'
                            type='text'
                            name='profilePic'
                        />
                        <FieldStyled
                            placeholder='Enter your background page...'
                            type='text'
                            name='background'
                        />
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
                        <ButtonAuth type='submit'>Sign Up</ButtonAuth>
                        <BarSignIn />
                        <SectionProvider />
                    </FormStyled>
                </>
            }}
        </Formik>
    )
}