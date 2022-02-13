import { Button } from '@mui/material'
import React from 'react'
import {useParams} from 'react-router-dom'

export default function Info() {

    let {id} = useParams()

    return (<>
    <h1>
        {id}
    </h1>
    <Button href={`/chat/${id}`}>Open the chat for this page</Button>
    </>)
}