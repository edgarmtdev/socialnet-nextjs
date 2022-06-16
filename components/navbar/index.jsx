import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Links, Nav, NavContainer } from './styles'
import Dropdown from './dropdown'
import Routes from './routes'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const {
        logged,
        user
    } = useSelector(state => state.auth)


    return (
        <Nav>
            <NavContainer>
                <h2 className='text-base'>
                    <Link href={logged ? '/home' : '/'}>
                        Home
                    </Link>
                </h2>
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
                        <Dropdown open={open} setOpen={setOpen} />
                    </>
                }
            </NavContainer>
        </Nav>
    )
}
