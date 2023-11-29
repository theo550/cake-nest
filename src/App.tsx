import { createContext, useEffect, useState } from 'react';
import './App.css'
import Router from './Router'
import { ToastContainer } from 'react-toastify'
import { AdminContextType } from './types/admin';
import { SelectedMenuContext, menuContext } from './context/menuContext';
import { AdminTabContext } from './components/admin/AdminPanel';
import { isOpenContext } from './context/isOpenContext';
import { MenuType, nullMenuType } from './types/menu';
import { CartContext } from './context/cartContext';
import { CartType } from './types/cart';
import { UserContext } from './context/userContext';
import { UserType, nullUser } from './types/user';

export const AdminContext = createContext<AdminContextType | null>(null);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [menu, setMenu] = useState<MenuType[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuType>(nullMenuType);
  const [user, setUser] = useState<UserType>(nullUser);
  const [cart, setCart] = useState<CartType[]>([]);
  
  useEffect(() => {
    const storedCart = localStorage.getItem(user.user_name);
    storedCart && setCart(JSON.parse(storedCart));
  }, [setCart, user.user_name]);

  return (
    <div>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <menuContext.Provider value={{ menu, setMenu }}>
          <AdminTabContext.Provider value={{ selectedTab, setSelectedTab }}>
            <isOpenContext.Provider value={{ isOpen, setIsOpen }}>
              <SelectedMenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
                <CartContext.Provider value={{ cart, setCart }}>
                  <UserContext.Provider value={{ user, setUser }}>
                    <Router/>
                  </UserContext.Provider>
                </CartContext.Provider>
              </SelectedMenuContext.Provider>
            </isOpenContext.Provider>
          </AdminTabContext.Provider>
        </menuContext.Provider>
      </AdminContext.Provider>
      <ToastContainer/>
    </div>
  )
}

export default App
