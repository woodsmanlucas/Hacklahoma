import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';
import { TextField,  Button, Container, Paper } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function Chatpage() {
    const [message, setMessage] = useState("")
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [UserId] = useState(uuidv4)

    useEffect(() => {
      const newSocket = io(`http://${window.location.hostname}:5000`);
      setSocket(newSocket);
      newSocket.on("messages", data => {
          setMessages(data)          
      })
      return () => newSocket.close();
    }, []);

    function handleChange(e) {
        setMessage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(socket){
        socket.emit('message', {id: uuidv4(), "user": UserId, "time": Date.now(), "msg": message})
        setMessage("")
        }
    }

  return (
    <Container sx={{display: "flex", flexDirection: "column", flexWrap: "nowrap", height: "100%"}}>
            <Paper sx={{height: "90vh" }}>{messages.map((msg) => (UserId == msg.user) ? <h1 key={msg.id}>{msg.msg}</h1> : <h2 key={msg.id}>{msg.msg}</h2>)}</Paper>
            <Paper sx={{display: "flex", flexDirection: "row"}} onSubmit={handleSubmit}>
            <TextField sx={{width: "80%"}} id="outlined-basic" label="Enter a message" variant="outlined" type="text" value={message} onChange={handleChange} />
            <Button sx={{width: "20%"}} onClick={handleSubmit} >Submit</Button>
            </Paper>
    </Container>
  )
}

