
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} E-Commerce Fusion. All rights reserved.</p>
        <p className="text-sm mt-2">Moda Guatemala</p>
      </div>
    </footer>
  );
};

export default Footer;
