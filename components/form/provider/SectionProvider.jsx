import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc';
import ButtonProvider from './ButtonProvider';

const googleProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider()
const ghProvider = new GithubAuthProvider()

export default function SectionProvider() {
    return (
        <div className=' flex gap-4 md:gap-10 justify-between md:mx-10'>
            <ButtonProvider
                icon={<FcGoogle className=' w-10 h-10' />}
                provider={googleProvider}
            />
            <ButtonProvider
                icon={<FaFacebookSquare className=' text-blue-700  w-10 h-10' />}
                provider={fbProvider}
            />
            <ButtonProvider
                icon={<AiFillGithub className='w-10 h-10' />}
                provider={ghProvider}
            />
        </div>
    )
}
