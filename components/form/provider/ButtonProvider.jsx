import { loginProvider } from '../../../libs/auth'

export default function ButtonProvider({ icon, provider, title }) {

    const loginWithProvider = (provider) => {
        loginProvider(provider)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    }

    return (
        <button
            type='button'
            onClick={() => loginWithProvider(provider)}
            className={`p-2 font-medium hover:scale-105 hover:opacity-90 bg-white flex rounded`}
        >
            <div className=' mx-auto flex gap-10'>{icon}<span>{title}</span></div>
        </button>
    )
}
