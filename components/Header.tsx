
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

const Header: React.FC = () => {
  const { cartCount } = useCart();

  const linkStyle = "text-gray-600 hover:text-indigo-600 transition font-medium px-3 py-2 rounded-md";
  const activeLinkStyle = "text-indigo-600 bg-indigo-50 font-semibold";

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
              Fusion
            </NavLink>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
              Inicio
            </NavLink>
            <NavLink to="/store" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
              Tienda
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink to="/cart" className="relative text-gray-600 hover:text-indigo-600 transition p-2 rounded-full hover:bg-gray-100">
              <ShoppingCartIcon />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
