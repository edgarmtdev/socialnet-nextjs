import React from 'react'
import { ButtonSend, Input, SectionToWrite } from './styles'
import { IoIosSend } from 'react-icons/io'

export default function WriteMessage({ sendMessage, input }) {
    return (
        <SectionToWrite>
            <Input ref={input} placeholder='Write message...' />
            <ButtonSend onClick={sendMessage}><IoIosSend className='w-6 h-6 text-white' /></ButtonSend>
        </SectionToWrite>
    )
}
