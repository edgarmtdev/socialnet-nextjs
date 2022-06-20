import React from 'react'

export default function Message({ data, idUser}) {
    return (
        <div className={`rounded-full py-2 px-4 gap-2 text-white font-medium w-max mb-2 ${data.sender == idUser ?
                'ml-auto bg-blue-500' :
                'bg-green-500'
                }`
            }>
            <p>{data.content}</p>
        </div>
    )
}
