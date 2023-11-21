import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>404</h1>
      <button onClick={handleNavigation}>Retourner vers la page d'accueil</button>
    </div>
  )
}

export default ErrorPage