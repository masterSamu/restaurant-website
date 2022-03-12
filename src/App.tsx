import React from "react";
import MainSection from "./components/Main/MainSection";
import MenuSection from "./components/MenuSection/MenuSection";
import NavigationBar from "./components/Navbar/NavigationBar";
import ShopStatus from "./components/ShopStatus/ShopStatus";
import "./styles/App.css";

import useFirestore from "./Hooks/useFirestore";
import Schedule from "./components/Schedule/Schedule";

function App() {
  const currentShopStatus = useFirestore();

  return (
    <main>
      <NavigationBar />
      {currentShopStatus !== undefined && (
        <ShopStatus currentShopStatus={currentShopStatus} />
      )}
      <MainSection />
      <span id="MENU" className="link-anchor"></span>
      <MenuSection />
      <span id="SCHEDULE" className="link-anchor"></span>
      <Schedule />
    </main>
  );
}

export default App;
