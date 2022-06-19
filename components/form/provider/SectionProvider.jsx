import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc';
import ButtonProvider from './ButtonProvider';

import { sighInMethods } from '../../../libs/auth'

export default function SectionProvider() {
    return (
        <div className=' flex flex-col gap-3 justify-between'>
            <ButtonProvider
                icon={<FcGoogle className=' w-7 h-7' />}
                provider={sighInMethods.google}
                title={'Google'}
            />
            <ButtonProvider
                icon={<FaFacebookSquare className=' text-blue-700  w-7 h-7' />}
                provider={sighInMethods.facebook}
                title={'Facebook'}
            />
            <ButtonProvider
                icon={<AiFillGithub className=' w-7 h-7' />}
                provider={sighInMethods.github}
                title={'Github'}
            />
        </div>
    )
}
