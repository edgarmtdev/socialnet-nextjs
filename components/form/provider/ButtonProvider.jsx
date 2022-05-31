import { loginProvider } from '../../../libs/auth'

export default function ButtonProvider({ icon, provider }) {

    const loginWithProvider = (provider) => {
        loginProvider(provider)
            .then(res => console.log('Hola', res))
            .catch(err => console.log(err))
    }

    return (
        <button
            type='button'
            onClick={() => loginWithProvider(provider)}
            className={`p-2 font-medium hover:scale-110 transition-transform 2s hover:opacity-90`}
        >
            {icon}
        </button>
    )
}
