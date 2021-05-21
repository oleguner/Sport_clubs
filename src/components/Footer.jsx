import React from 'react';
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer className="shadow h-16 flex bg-skin-header-main">
      <div className="flex-auto flex justify-center items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
