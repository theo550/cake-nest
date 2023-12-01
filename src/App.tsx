import { createContext, useState } from 'react';
import './App.css'
import Router from './Router'
import { ToastContainer } from 'react-toastify'
import { AdminContextType } from './types/admin';
import { SelectedMenuContext, menuContext } from './context/menuContext';
import { fakeMenu2 } from './data/fakeMenu';
import { AdminTabContext } from './components/admin/AdminPanel';
import { isOpenContext } from './context/isOpenContext';
import { MenuType, nullMenuType } from './types/menu';
import { CartContext } from './context/cartContext';
import { CartType } from './types/cart';
import { HighlightedContext } from './context/highlight';
import { discount } from './types/highlight';

export const AdminContext = createContext<AdminContextType | null>(null);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [menu, setMenu] = useState(fakeMenu2);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuType>(nullMenuType);
  const [cart, setCart] = useState<CartType[]>([]);
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [discount, setDiscount] = useState<discount[]>([]);

  return (
    <div>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <menuContext.Provider value={{ menu, setMenu }}>
          <AdminTabContext.Provider value={{ selectedTab, setSelectedTab }}>
            <isOpenContext.Provider value={{ isOpen, setIsOpen }}>
              <SelectedMenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
                <CartContext.Provider value={{ cart, setCart }}>
                  <HighlightedContext.Provider value={{ highlighted, discount, setDiscount, setHighlighted }}>
                    <Router/>
                  </HighlightedContext.Provider>
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
