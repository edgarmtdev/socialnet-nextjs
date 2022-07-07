import React from 'react'
import Link from 'next/link'

export default function LandingPage() {
    return (
        <section className=' mx-5 max-w-screen-xl md:mx-auto text-slate-100 grid md:grid-cols-2 md:mt-10  '>
            <div className='max-w-md mx-auto'>
                <div className='mt-24'>
                    <h1 className=' text-center md:text-left text-4xl text-great-blue-100 font-light'>SOCIAL MEDIA APP</h1>
                </div>
                <div className='mt-10 flex flex-col items-center md:items-start'>
                    <p className='text-center md:text-left text-sm text-mine-shaft-50 leading-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link href={'/auth/signup'}>
                    <button className='mt-10 py-3 w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-laic-500 rounded-full hover:opacity-90'>
                        Get Started
                    </button>
                    </Link>
                </div>
            </div>
            <div className=' mt-10 md:mt-0 flex justify-center'>
                <img src='/socialmedia.png' />
            </div>
        </section>
    )
}
