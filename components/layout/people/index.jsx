import React from 'react'
import Link from 'next/link'

export default function ProfileLayout({ children }) {
    return (
        <>
            <div className='bg-[#212e36] w-[20%] h-screen fixed z-1 top-0 border-r-[1px] border-gray-600 pt-32 px-2 text-white'>
                <ul className=' flex flex-col gap-4 font-medium text-lg '>
                    <Link href={'/people/allusers'}>
                        <li className=' px-4 py-3 rounded-lg hover:bg-[#2b3b45] bg-[#212e36] cursor-pointer'>All</li>
                    </Link>
                    <Link href={'/people/friendship-request'}>
                        <li className=' px-4 py-3 rounded-lg hover:bg-[#2b3b45] bg-[#212e36] cursor-pointer'>Friendship Request</li>
                    </Link>
                    <Link href={'/people/request-sent'}>
                        <li className=' px-4 py-3 rounded-lg hover:bg-[#2b3b45] bg-[#212e36] cursor-pointer'>Requests Send</li>
                    </Link>
                </ul>
            </div>
            <div>{children}</div>
        </>
    )
}
