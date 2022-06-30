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
            className={`p-[3px] hover:scale-105 hover:opacity-90 bg-white grid grid-cols-2 rounded-sm items-center`}
        >
                <span className='ml-auto mr-10'>{icon}</span>
                <p className='mr-auto text-sm text-gray-800'>{title}</p>
        </button>
    )
}        