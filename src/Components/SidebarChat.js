import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import db from '../firebase'
import { Link } from 'react-router-dom'

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("")
    const [messages, setMessages] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    const addChat = () => {
        const roomName = prompt('Enter Your Room Name ...')
        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="SidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="SidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="SidebarChat" onClick={addChat}>
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat
