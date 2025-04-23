import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, sendText } from '../redux/count/countSlice'

function Home() {
    const { timer, text } = useSelector((state) => state.count)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    function send() {
        dispatch(sendText(title))
    }
    return (
        <div>
            Home
            <div>{timer}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <h1>{text}</h1>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={send}>Send</button>
        </div>
    )
}

export default Home
