import { useState, useRef, useEffect } from 'react'
import { child, get, onValue, push, ref } from 'firebase/database'
import { realTimeDB } from '../../../config/firebase'
import { useRouter } from 'next/router'
import { HeadComponent } from '../../../components/utils/HeadComponent'

export default function Chat() {
    const [messages, setMessages] = useState([])
    const messageInput = useRef()
    const router = useRouter()
    const { idUser, idFriend } = router.query

    useEffect(() => {
        const chatRef = ref(realTimeDB, `chats/${idUser}/${idFriend}`)
        if (idUser && idFriend) {
            onValue(chatRef, (snapshot) => {
                setMessages(snapshot.val().messages)
                messageInput.current.value = ''
            })
        }
    }, [idFriend])

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
    }

    return (
        <>
            <HeadComponent title={'Chat'} />
            <div className='max-w-screen-md mx-auto mt-20'>
                {Object.entries(messages).map(([id, data]) => (
                    <div key={id}
                        className={`rounded-full py-2 px-4 gap-2 text-white font-medium w-max mb-2 ${data.sender == idUser ?
                            'ml-auto bg-blue-500' :
                            'bg-green-500'
                            }`
                        }>
                        <p>{data.content}</p>
                    </div>
                ))}

                <div className='flex bg-gray-100 p-2 mt-10'>
                    <input ref={messageInput} className="w-full outline-none bg-transparent" placeholder='Write message...'></input>
                    <button onClick={sendMessage}>Enviar</button>
                </div>
            </div>
        </>
    )
}
