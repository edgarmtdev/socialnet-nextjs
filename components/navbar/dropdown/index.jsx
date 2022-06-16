import { Menu } from './styles'
import { useRouter } from 'next/router'
import { auth } from '../../../config/firebase'
import { signOut } from 'firebase/auth'

export default function Dropdown({ open }) {

    const router = useRouter()
    const logout = () => {
        signOut(auth)
        setOpen(false)
        router.replace('/')
    }
    return (
        <Menu primary={open ? true : false}>
            <ul className=' flex flex-col'>
                <li
                    className='cursor-pointer py-3 px-5 hover:bg-mine-shaft-500 rounded-bl-md'
                    onClick={logout}
                >
                    Logout
                </li>
            </ul>
        </Menu>
    )
}
