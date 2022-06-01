import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup, fetchSignInMethodsForEmail } from 'firebase/auth'
import { auth } from '../config/firebase'

const supportedSignInMethods = [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID
]

export const sighInMethods = {
    google: GoogleAuthProvider.PROVIDER_ID,
    facebook: FacebookAuthProvider.PROVIDER_ID,
    github: GithubAuthProvider.PROVIDER_ID
}

function getProvider(id) {
    switch (id) {
        case GoogleAuthProvider.PROVIDER_ID:
            return new GoogleAuthProvider
        case FacebookAuthProvider.PROVIDER_ID:
            return new FacebookAuthProvider
        case GithubAuthProvider.PROVIDER_ID:
            return new GithubAuthProvider
        default:
            throw new Error('No provider accepted: ' + id)
    }
}

export async function loginProvider(id) {
    try {
        return await signInWithPopup(auth, getProvider(id))
    } catch (error) {
        // console.log({ ...error }) // para ver las propiedades del error
        const email = error.customData.email
        if (email && error.code === 'auth/account-exists-with-different-credential') {
            const providers = await fetchSignInMethodsForEmail(auth, email)
            const method = providers.find(provider => supportedSignInMethods.includes(provider))

            if (!method) {
                throw new Error('Yout account is linked with an unsupported provider')
            }

            const linkedProvider = getProvider(method)
            const result = await signInWithPopup(auth, linkedProvider)
            return result
        }

        return {
            message: 'not supported'
        }
    }
}