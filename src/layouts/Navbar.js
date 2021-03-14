import React, { useState,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../context';

const Navbar = () => {
  const [picker,setPicker] = useState("turkey")

  const {country} = useContext(Consumer)

  const pickerNow = country

  useEffect(()=>{
    setPicker(pickerNow)
  },[pickerNow])

  const handlePicker = (e)=>{
    setPicker(e.target.value)
    localStorage.setItem("Country",e.target.value)
    window.location.reload();
  }

  return (
    <Consumer>
    {value=>{
      const { country,countries } = value
      return(
        <nav className="navbar navbar-light mb-5">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="mr-auto p-4">Corona Status | {country}</h1>
        </Link>
        <div className="text-center ml-auto navbar-button">
          <Link to="/vaccine" className="btn btn-dark">
            {country} Aşı Miktarı
          </Link>
        </div>
        <div className="text-light ml-2">
        <select className="country-picker" onChange={handlePicker} value={picker}>
          {
            countries.map(item=>(
            <option value={item.Country}>{item.Country}</option>
            ))
          }
        </select>
        </div>
      </nav>
      )
    }}
    </Consumer>
  );
};

export default Navbar;
