import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFetch } from '../redux/user/userSlice'

function Service() {
    const dispatch = useDispatch()
    const {list, loading, error} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(userFetch())
    }, [dispatch])

    console.log(list);
    
  return (
    <div>
      {
        list.map((item)=> (
            <div></div>
        ))
      }
    </div>
  )
}

export default Service
