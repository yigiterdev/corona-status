import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light mb-5">
      <h1 className="mr-auto p-4">Corona Status | Turkey</h1>
      <div className="text-center ml-auto navbar-button">
        <a href="https://covid19asi.saglik.gov.tr/" className="btn btn-dark">
          Türkiye Aşı Miktarı
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
