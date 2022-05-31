import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc';
import ButtonProvider from './ButtonProvider';

import { sighInMethods } from '../../../libs/auth'

export default function SectionProvider() {
    return (
        <div className=' flex justify-between md:mx-10'>
            <ButtonProvider
                icon={<FcGoogle className=' w-10 h-10' />}
                provider={sighInMethods.google}
            />
            <ButtonProvider
                icon={<FaFacebookSquare className=' text-blue-700  w-10 h-10' />}
                provider={sighInMethods.facebook}
            />
            <ButtonProvider
                icon={<AiFillGithub className='w-10 h-10' />}
                provider={sighInMethods.github}
            />
        </div>
    )
}
