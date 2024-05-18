import React, { useState, useEffect } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delaying for 2 seconds
    setTimeout(() => {
      const data = [
    {id:1,name:'Alice',email:'alice@example.com'},
    {id:2,name:'Bob',email:'bob@example.com'},
    {id:3,name:'Charlie',email:'charlie@example.com'},
    {id:4,name:'David',email:'david@example.com'}
    ];
      setUsers(data);
      setIsLoading(false);
    }, 2000);

    // Log a message when the component mounts
    console.log('UserList component mounted');
  }, []);

  return (
    <div className="user-list">
      {isLoading ? (<p>Please wait. Data is loading...</p>) : (
      <ol>
      {users.map(user => (
        <li key={user.id}>
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
        </li>
        ))}
        </ol>)}
    </div>
  );
};

export default UserList;