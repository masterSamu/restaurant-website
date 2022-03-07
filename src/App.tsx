import React from 'react';
import MainSection from './components/Main/MainSection';
import MenuSection from './components/MenuSection/MenuSection';
import NavigationBar from './components/Navbar/NavigationBar';
import './styles/App.css';

function App() {
  return (
    <main>
      <NavigationBar />
      <MainSection />
      <span id="MENU" className="link-anchor"></span>
      <MenuSection />
    </main>
  );
}

export default App;
