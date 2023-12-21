import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
    <h1>Список користувачів</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - <Link to={`/user/${user.id}/albums`}>Album</Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Users;