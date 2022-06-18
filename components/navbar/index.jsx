import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Links, Nav, NavContainer } from './styles'
import Dropdown from './dropdown'
import Routes from './routes'
import { CgUserlane } from 'react-icons/cg'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const {
        logged,
        user
    } = useSelector(state => state.auth)


    return (
        <>
            <Nav>
                <NavContainer>
                    <Link href={logged ? '/home' : '/'}>
                        <h1 className=' flex gap-2 items-center text-base cursor-pointer'>
                            <CgUserlane className=' w-10 h-10' />
                            Home
                        </h1>
                    </Link>
                    {!logged ?
                        <Links>
                            <li>
                                <Link href={'/auth/login'}>LogIn</Link>
                            </li>
                            <li>
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
        </>
    )
}
