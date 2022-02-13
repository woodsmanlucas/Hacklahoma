import React from 'react'
import { useMoralis } from 'react-moralis';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Main from './container/Main'
import Homepage from './Pages/Homepage';
import Welcome from './Pages/WelcomePage';
import { auth } from './services/firebase.js'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

export default function App() {

    // const { authenticate, isAuthenticated, logout } = useMoralis();
    const [user] = useAuthState(auth);

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    // if (isAuthenticated) {
    //     return (
    //         <div>
    //             <Button onClick={logout}>Logout</Button>
    //             {/* <Main /> */}
    //             <Welcome />
    //         </div>
    //     )
    // }

    return (
        <div>
            {user ?
                <Main />
                :
                <div>
                    <Homepage />
                    <CardActions>
                        <Paper sx={{ display: 'flex', flexDirection: 'column', marginTop: '30%', position: 'relative', mx: "auto" }}>
                            <Box component="span" sx={{ p: 7, border: '5px grey' }}>
                                <Button variant="contained" color="success" sx={{ width: "100%" }} onClick={signInWithGoogle}>Login with google</Button>
                                <Paper sx={{ margin: '5%' }}></Paper>
                            </Box>
                            <Button variant="contained" sx={{ width: "100%" }} onClick={() => authenticate()} >Log in with metamask</Button>
                        </Paper>
                    </CardActions>
                </div>
            }
        </div>
    )
}
