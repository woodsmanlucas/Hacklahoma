import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';
import { FormControl, TextField,  Button, Container, Paper } from '@mui/material';


export default function Chatpage() {
    const [message, setMessage] = useState("")
    const [socket, setSocket] = useState(null);

    useEffect(() => {
      const newSocket = io(`http://${window.location.hostname}:3000`);
      setSocket(newSocket);
      return () => newSocket.close();
    }, [setSocket]);

    function handleChange(e) {
        setMessage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("jaja")
        socket.emit('message', message)
        setMessage("")
    }

  return (
    <Container sx={{display: "flex", flexDirection: "column", flexWrap: "nowrap", height: "100%"}}>
                <h1>height</h1>
                <Paper sx ={{ml: "auto"}}>
                <h1>hello</h1>
                </Paper>
                <h1>height</h1>
                <Paper sx ={{ml: "auto"}}>
                <h1>hello</h1>
                </Paper>                <h1>height</h1>
                <Paper sx ={{ml: "auto"}}>
                <h1>hello</h1>
                </Paper>                <h1>height</h1>
                <Paper sx ={{ml: "auto"}}>
                <h1>hello</h1>
                </Paper>                <h1>height</h1>
                <Paper sx ={{ml: "auto"}}>
                <h1>hello</h1>
                </Paper>                <h1>height</h1>
                <Paper sx ={{ml: "auto"}}>
                <h1>hello</h1>
                </Paper>                <h1>height</h1>
                <Paper sx ={{ml: "auto"}}>
                <h1>hello</h1>
                </Paper>
            <Paper sx={{display: "flex", flexDirection: "row"}} onSubmit={handleSubmit}>
            <TextField sx={{width: "80%"}} id="outlined-basic" label="Enter a message" variant="outlined" type="text" value={message} onChange={handleChange} />
            <Button sx={{width: "20%"}} onClick={handleSubmit} >Submit</Button>
            </Paper>
    </Container>
  )
}

