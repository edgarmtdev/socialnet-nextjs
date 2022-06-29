import { useRef } from 'react'
import { child, push, ref } from 'firebase/database'
import { useRouter } from 'next/router'
import { realTimeDB } from '../../config/firebase'
import Messages from './messages'
import { ContainerChat } from './styles'
import WriteMessage from './sendmessage'

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
            <WriteMessage sendMessage={sendMessage} input={messageInput} />
        </ContainerChat>
    )
}
