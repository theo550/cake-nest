import styled from 'styled-components'
import LoginHeader from '../../components/login/LoginHeader'
import LoginInput from '../../components/login/LoginInput'
import background from '../../assets/tarts.jpg'

const Login = () => {
  return (
    <LoginWrapper>
      <LoginHeader/>
      <LoginInput/>
    </LoginWrapper>
  )
}

export default Login

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  background: center url(${background});
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
  }
`;
