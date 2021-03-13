import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light mb-5">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="mr-auto p-4">Corona Status | Turkey</h1>
      </Link>
      <div className="text-center ml-auto navbar-button">
        <Link to="/vaccine" className="btn btn-dark">
          Türkiye Aşı Miktarı
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
