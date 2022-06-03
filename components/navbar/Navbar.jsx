import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { auth } from '../../config/firebase'

export default function Navbar() {

    const { logged, user: { name, profilePic } } = useSelector(state => state.auth)

    return (
        <nav className=' bg-mine-shaft-600 text-white p-4'>
            <div className=' max-w-screen-xl w-full flex items-center mx-auto text-sm'>
                <h2 className=' text-base'><Link href={'/'}>Home</Link></h2>
                {!logged ?
                    <ul className=' flex items-center ml-auto gap-10'>
                        <li><Link href={'/auth/login'}>LogIn</Link></li>
                        <li><Link href={'/auth/sigup'}>SignUp</Link></li>
                    </ul>
                    :
                    <ul className=' flex items-center ml-auto gap-8'>
                        <li><Link href={'/profile'}>MyProfile</Link></li>
                        <li className=' cursor-pointer' onClick={() => { signOut(auth) }}>Logout</li>
                        <li className=' flex gap-2 items-center'><img src={profilePic} alt="" className=' w-6 h-6 rounded-full' />{name}</li>
                    </ul>
                }
            </div>
        </nav>
    )
}