import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const handleLogout = () => {
    navigate('/');
  }

  useEffect(() => {
    !state && navigate('/');
  }, [state, navigate]);

  return state && (
    <div>
      <h1>Bonjour {state.name}</h1>
      <button
        onClick={handleLogout}
      >
        Déconnexion
      </button>
    </div>
  )
}

export default OrderPage