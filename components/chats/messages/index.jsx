import { useState, useEffect } from 'react'
import { onValue, ref } from 'firebase/database'
import { realTimeDB } from '../../../config/firebase'
import Message from './message'

export default function Messages({ idUser, idFriend}) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const chatRef = ref(realTimeDB, `chats/${idUser}/${idFriend}`)
        if (idUser && idFriend) {
            onValue(chatRef, (snapshot) => {
                if (snapshot.exists()) {
                    setMessages(snapshot.val().messages)
                }
            })
        }
    }, [idFriend])
    
    return (
        <>
            {Object.entries(messages).map(([id, data]) => (
                <Message key={id}  data={data} idUser={idUser}/>
            ))}
        </>
    )
}
