import React, { useState } from 'react';
import { Menu, X, Package, Settings } from 'lucide-react';

interface NavigationProps {
  currentPage: 'landing' | 'admin';
  onPageChange: (page: 'landing' | 'admin') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Premium Store</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onPageChange('landing')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'landing'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onPageChange('admin')}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'admin'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Settings className="h-4 w-4 mr-2" />
              Admin
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => {
                  onPageChange('landing');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                  currentPage === 'landing'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onPageChange('admin');
                  setIsMenuOpen(false);
                }}
                className={`flex items-center w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                  currentPage === 'admin'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Settings className="h-4 w-4 mr-2" />
                Admin
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;