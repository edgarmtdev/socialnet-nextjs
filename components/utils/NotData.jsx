import React from 'react'

export default function NotData({message}) {
    return (
        <div className='w-full h-[60vh] flex items-center justify-center'>
            <p className='text-slate-400'>{message}</p>
        </div>
    )
}
