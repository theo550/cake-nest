import { createContext, useState } from 'react';
import './App.css'
import Router from './Router'
import { ToastContainer } from 'react-toastify'
import { AdminContextType } from './types/admin';
import { menuContext } from './context/menuContext';
import { fakeMenu2 } from './data/fakeMenu';

export const AdminContext = createContext<AdminContextType | null>(null);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <div>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <menuContext.Provider value={{ menu, setMenu }}>
          <Router/>
        </menuContext.Provider>
      </AdminContext.Provider>
      <ToastContainer/>
    </div>
  )
}

export default App
