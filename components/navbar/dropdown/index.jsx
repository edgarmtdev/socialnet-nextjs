import Link from 'next/link'
import { useRouter } from 'next/router' 
import { signOut } from 'firebase/auth'
import { auth } from '../../../config/firebase'
import { HiOutlineLogout } from 'react-icons/hi'
import { Menu, Item, User } from './styles'
import { BiUser } from 'react-icons/bi'

export default function Dropdown({ open, setOpen, user }) {

    const router = useRouter()
    const logout = () => {
        signOut(auth)
        setOpen(false)
        router.replace('/')
    }
    return (
        <Menu primary={open ? true : false}>
            <ul className=' flex flex-col text-sm'>
                <User>
                    <img src={user.profilePic} className=' w-9 h-9 rounded-full' />
                    {user.name}
                </User>
                <Link href={`/profile/${user.idUser}`}>
                    <Item>
                        <BiUser className='w-5 h-5' />
                        Profile
                    </Item>
                </Link>
                <Item signout={true} onClick={logout}>
                    <HiOutlineLogout className='w-5 h-5'/>
                    Logout
                </Item>
            </ul>
        </Menu>
    )
}
