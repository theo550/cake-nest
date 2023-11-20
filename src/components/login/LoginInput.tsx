import React, { useState } from 'react'

const LoginInput = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== '') {
      alert('Bonjour ' + name);
      setName('');
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