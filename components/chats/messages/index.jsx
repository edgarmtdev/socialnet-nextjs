import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { realTimeDB } from "../../../config/firebase";
import Message from "./message";

export default function Messages({ idUser, idFriend }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
    const chatRef = ref(realTimeDB, `chats/${idUser}/${idFriend}`);
    if (idUser && idFriend) {
      onValue(chatRef, (snapshot) => {
        if (snapshot.exists()) {
          setMessages(snapshot.val().messages);
        }
      });
    }
  }, [idUser, idFriend]);

  return (
    <>
      {messages.length !== 0 ? (
        Object.entries(messages).map(([id, data]) => (
          <Message key={id} data={data} idUser={idUser} />
        ))
      ) : (
        <p className="absolute left-1/2 top-1/2 text-gray-400">No messages</p>
      )}
    </>
  );
}
