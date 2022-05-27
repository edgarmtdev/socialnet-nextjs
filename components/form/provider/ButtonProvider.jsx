import { auth } from '../../../config/firebase'

export default function ButtonProvider({ icon, provider }) {

    const loginProvider = (provider) => {
        signInWithPopup(auth, provider)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <button
            type='button'
            onClick={() => loginProvider(provider)}
            className={`bg-white p-2 rounded-xl shadow-md font-medium`}
        >
            {icon}
        </button>
    )
}
