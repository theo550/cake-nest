import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <Link to='/'>Retourner vers la page d'accueil</Link>
    </div>
  )
}

export default ErrorPage