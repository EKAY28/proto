import React from 'react';
import './NavigationBar.css';
import cqaLogo from './cqa_logo.png';

function NavigationBar({ onMenuClick }) {
  return (
    <div className="navigation-bar">
      <div className="logo-container">
        <img src={cqaLogo} alt="CQA Review Center" className="logo-img" />
        <h1 className="logo-title">CQA Review Center</h1>
      </div>
      <div className="nav-buttons-container">
        <button className="nav-button" onClick={() => onMenuClick('home')}>
          Home
        </button>
        <button className="nav-button" onClick={() => onMenuClick('topnotcher')}>
          Topnotcher
        </button>
        <button className="nav-button" onClick={() => onMenuClick('updates')}>
          Updates
        </button>
        <button className="nav-button" onClick={() => onMenuClick('bookstore')}>
          Bookstore
        </button>
        
        <button className="nav-button" onClick={() => onMenuClick('contactus')}>
          ContactUs
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;