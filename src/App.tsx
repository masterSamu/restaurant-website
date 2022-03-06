import React from 'react';
import MainSection from './components/Main/MainSection';
import NavigationBar from './components/Navbar/NavigationBar';
import './styles/App.css';

function App() {
  return (
    <main>
      <NavigationBar />
      <MainSection />
    </main>
  );
}

export default App;
