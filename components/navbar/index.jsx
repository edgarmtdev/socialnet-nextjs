import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { Item, Menu, Nav } from './styled'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const {
        logged,
        user: { name, profilePic }
    } = useSelector(state => state.auth)

    const router = useRouter()
    const logout = () => {
        signOut(auth)
        setOpen(false)
        router.replace('/')
    }

    return (
        <Nav>
            <div className='max-w-screen-xl w-full flex items-center mx-auto'>
                <h2 className='text-base'><Link href={logged ? '/home' : '/'}>Home</Link></h2>
                {!logged ?
                    <ul className='flex items-center ml-auto gap-10 m-4'>
                        <li><Link href={'/auth/login'}>LogIn</Link></li>
                        <li><Link href={'/auth/signup'}>SignUp</Link></li>
                    </ul>
                    :
                    <>
                        <ul className=' flex items-center ml-auto'>
                            <Link href={'/profile'}><Item>MyProfile</Item></Link>
                            <Link href={'/people'}><Item>People</Item></Link>
                            <li className='flex p-4 gap-2 items-center cursor-pointer'
                                onClick={() => setOpen(!open)}
                            >
                                <img src={profilePic} alt=" " className=' w-6 h-6 rounded-full' />
                                {name}
                            </li>
                        </ul>
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
                    </>
                }
            </div>
        </Nav>
    )
}
