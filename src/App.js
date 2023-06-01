import React, { useState } from 'react';
import Home from './components/Home';
import Topnotcher from './components/Topnotcher';
import NavigationBar from './components/NavigationBar';
import Updates from './components/Updates';
import Bookstore from './components/Bookstore';
import ContactUs from './components/ContactUs';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <NavigationBar onMenuClick={handleMenuClick} />
      {activePage === 'home' && <Home />}
      {activePage === 'topnotcher' && <Topnotcher />}
      {activePage === 'updates' && <Updates />}
      {activePage === 'bookstore' && <Bookstore />}
      {activePage === 'contactus' && <ContactUs />}
    </div>
  );
}

export default App;