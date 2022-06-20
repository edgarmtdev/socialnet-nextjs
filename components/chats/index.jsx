import { useRef } from 'react'
import { child, push, ref } from 'firebase/database'
import { useRouter } from 'next/router'
import { realTimeDB } from '../../config/firebase'
import Messages from './messages'
import { ContainerChat } from './styles'

export default function Chats() {
    const messageInput = useRef()
    const router = useRouter()
    const { idUser, idFriend } = router.query

    const sendMessage = () => {
        const message = messageInput.current.value
        const dbRef = ref(realTimeDB)
        push(child(dbRef, `chats/${idUser}/${idFriend}/messages`), {
            content: message,
            sender: idUser,
            date: new Date().toISOString()
        })
        push(child(dbRef, `chats/${idFriend}/${idUser}/messages`), {
            content: message,
            sender: idUser,
            date: new Date().toISOString()
        })
        messageInput.current.value = ''
    }

    return (
        <ContainerChat>
            <Messages idUser={idUser} idFriend={idFriend} />
            <div className='flex bottom-0 gap-5 fixed w-[73%] left-1/4 p-4'>
                <input ref={messageInput} className="w-full outline-none bg-transparent border-[1px] rounded-full p-3 text-gray-200" placeholder='Write message...'></input>
                <button onClick={sendMessage} className=' text-white'>Enviar</button>
            </div>
        </ContainerChat>
    )
}
