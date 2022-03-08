import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useFirestore from "../../Hooks/useFirestore";
import "./ShopStatus.css";

export default function ShopStatus() {
  const isOpen = useFirestore();
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
        setClassName("open");
    } else {
        setClassName("closed");
    }
  }, [isOpen]);

  return (
    <Container className={"shop-status-container " + className}>
        <span className="shop-container-headline">Tänään</span>
      {isOpen ? (
        <>
          <div className="shop-status-opening">
            <span><b>Avoinna</b></span>
            <span className={"shop-status-icon " + className}>Avoinna</span>
            <span>10:00 - 20:00</span>
          </div>
          <div className="shop-status-location">
            <span><b>Sijainti</b></span>
            <span>Nokia, Pirkkalaistori</span>
          </div>
        </>
      ) : (
        <>
          <div className="shop-status-opening">
            <span>Avoinna</span>
            <span className={"shop-status-icon " + className}>Suljettu</span>
          </div>
          <div className="shop-status-location">
            <span>
              Katso huomisen sijainti <a href="#SCHEDULE">aikataulusta</a>
            </span>
          </div>
        </>
      )}
    </Container>
  );
}
