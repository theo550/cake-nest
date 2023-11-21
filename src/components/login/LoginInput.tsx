import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginInput = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== '') {
      setName('');
      navigate('/order', {state:{ name: name }})
    } else {
      alert('Il doit y avoir un nom !')
    }
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Entrez votre prénom...'
          onChange={handleName}
          value={name}
        />
        <button type='submit'>Accédez à votre espace</button>
      </form>
    </div>
  )
}

export default LoginInput