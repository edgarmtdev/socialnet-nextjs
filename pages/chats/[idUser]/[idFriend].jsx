import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { child, get, ref } from 'firebase/database'
import { realTimeDB, database } from '../../../config/firebase'
import { useState } from 'react'
import { HeadComponent } from '../../../components/utils/HeadComponent'

export default function Chat() {
    const router = useRouter()
    const { idUser, idFriend } = router.query
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const dbRef = ref(realTimeDB)
        if (idUser, idFriend) {
            get(child(dbRef, `chats/${idUser}/${idFriend}`))
                .then(snapshot => {
                    if (snapshot.exists()) {
                        setMessages(snapshot.val())
                        console.log(snapshot.val().messages);
                    }
                })
        }
    }, [idFriend])

    return (
        <>
        <HeadComponent title={'Chat'}/>
            <div>Chat</div>
        </>
    )
}
