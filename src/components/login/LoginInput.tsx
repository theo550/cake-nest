import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { PiUserCircleFill } from "react-icons/pi";
import Button from '../ui/Button';

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
    <LoginForm>
      <hr />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <PiUserCircleFill color={theme.colors.greyMedium} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.5rem' }}/>
          <input
            type="text"
            placeholder='Entrez votre prénom...'
            onChange={handleName}
            value={name}
            />
        </InputContainer>
        <Button text='Mon espace' span='&rsaquo;'/>
      </form>
    </LoginForm>
  )
}

export default LoginInput

const LoginForm = styled.div`

  max-width: 500px;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 999;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    width: 100%;
  }

  h2 {
    font-family: 'Pacifico', cursive;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: ${theme.gridUnit * 5}px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    }
`;

const InputContainer = styled.div`
  position: relative;

  input {
    max-width: 500px;
    min-width: 400px;
    margin: 10px 0;
    border-radius: ${theme.borderRadius.round};
    border: none;
    height: 50px;
    color: ${theme.colors.greyDark};
    padding-left: 50px;
    font-family: 'Open Sans', sans-serif;
    color: ${theme.colors.greyMedium};
    }
`;
