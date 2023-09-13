import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
function UserName() {
const username = useSelector((state)=>state.user.username)
console.log(username)
  return (
    <div className='text-sm font-semibold hidden md:block'>{username} </div>
  )
}

export default UserName