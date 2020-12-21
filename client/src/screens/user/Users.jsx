import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users(props) {
  const { users } = props;


  return (
    <div>
      <h1>users</h1>
      {users?.map(user =>
        <>
          <Link to={`/users/${user.id}`}>
            <p>{user.username}</p>
          </Link>
        </>
      )}
    </div>
  )
}