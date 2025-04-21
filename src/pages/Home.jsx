import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/count/countSlice'

function Home() {
    const {timer} = useSelector((state) => state.count) 
    const dispatch = useDispatch()
  return (
    <div>
      Home
      <div>{timer}</div>
      <button onClick={()=> dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Home
