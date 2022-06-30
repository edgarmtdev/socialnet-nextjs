import Link from 'next/link'
import { useState } from 'react'
import { CgUserlane } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import Dropdown from './dropdown'
import Routes from './routes'
import { Links, Nav, NavContainer } from './styles'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const { logged, user } = useSelector(state => state.auth)

    return (
        <Nav>
            <Link href={logged ? '/home' : '/'}>
                <h1 className='flex gap-2 items-center text-base cursor-pointer'>
                    <CgUserlane className='w-8 h-8' />
                    <span>Home</span>
                </h1>
            </Link>
            <NavContainer>
                {!logged ?
                    <Links>
                        <Link href={'/auth/login'}>
                            <li className=' bg-white px-4 py-[6px] text-slate-600 rounded-full hover:opacity-80 cursor-pointer'>
                                LogIn
                            </li>
                        </Link>
                        <li className=' border-[1px] text-white px-4 py-[5px] rounded-full hover:opacity-80 cursor-pointer'>
                            <Link href={'/auth/signup'}>SignUp</Link>
                        </li>
                    </Links>
                    :
                    <>
                        <Links idLogged={true}>
                            <Routes user={user} setOpen={setOpen} open={open} />
                        </Links>
                        <Dropdown open={open} setOpen={setOpen} user={user} />
                    </>
                }
            </NavContainer>
        </Nav>
    )
}
