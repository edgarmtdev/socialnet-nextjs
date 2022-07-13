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
import { useState } from 'react'
import { ImSpinner } from 'react-icons/im'

export default function SignupModule() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const signup = async (values, { setSubmitting, setErrors }) => {
        setLoading(true)
        const newUser = await axios.post('/api/auth/signup', { update: false, ...values })

        /*TODO: refactor errors*/

        if (newUser.data.id) {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then(result => {
                    updateProfile(result.user, {
                        displayName: values.name,
                        photoURL: values.profilePic,
                    })
                    dispatch(updateProviders({
                        update: true,
                        id: newUser.data.id,
                        email: newUser.email,
                        provider: result.user.providerId,
                        idProvider: result.user.uid,
                    }))
                    setLoading(false)
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
                        {loading && <ImSpinner className='text-white animate-spin' />}
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