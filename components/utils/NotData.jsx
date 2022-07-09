import React from 'react'

export default function NotData({message}) {
    return (
        <div className='w-screen absolute left-0 top-0 h-[100vh]  flex items-center justify-center'>
            <p className='text-slate-400 ml-16 md:ml-72'>{message}</p>
        </div>
    )
}
