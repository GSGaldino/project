import React, { useEffect } from 'react';
import api from '../../services/api';

export default function Home(){
  useEffect(() => {
    api.get('users')
      .then(res => console.log(res.data))
  }, []);
  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  )
}
