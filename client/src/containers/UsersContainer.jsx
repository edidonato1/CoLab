import { useState, useEffect } from 'react'
import { getAllUsers } from '../services/users'

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    }
    fetchUsers();
  },[])
  
  
  return (
    <div>
      {users.map(user => 
        <>
          <p>{user.username}</p>
          <p>collaborations: {user.collaborations.length > 0 ? user.collaborations.map(colab => <p>{colab.title}</p>) : <p>none at this time</p> }</p>
          </>
        )}
    </div>

  )
}