import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id}=useParams()
  return (
    <div className='bg-gray-700 text-white justify-center text-center text-3xl p-4'>
      User {id}
    </div>
  )
}

export default User
