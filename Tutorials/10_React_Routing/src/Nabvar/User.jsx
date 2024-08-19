import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const params=useParams()
  return (
    <div>
        Hello I'm {params.username}
    </div>
  )
}

export default User
