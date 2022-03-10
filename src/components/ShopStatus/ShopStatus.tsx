import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ShopStatus.css";

interface Props {
  currentShopStatus:
    | {
        is_shop_open: boolean;
        open_at: string;
        close_at: string;
        location: string;
        location_url: string;
      }
    | undefined;
}

export default function ShopStatus({ currentShopStatus }: Props) {
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    if (currentShopStatus?.is_shop_open) {
      setClassName("open");
    } else {
      setClassName("closed");
    }
  }, [currentShopStatus?.is_shop_open]);

  return (
    <Container className={"shop-status-container " + className}>
      <span className="shop-container-headline">Tänään</span>
      {currentShopStatus?.is_shop_open ? (
        <>
          <div className="shop-status-opening">
            <span>
              <b>Avoinna</b>
            </span>
            <span className={"shop-status-icon " + className}>Avoinna</span>
            <span>
              {currentShopStatus?.open_at} - {currentShopStatus?.close_at}
            </span>
          </div>
          <div className="shop-status-location">
            <span>
              <b>Sijainti</b>
            </span>
            <span>
              <a href={currentShopStatus?.location_url} target="_blank" >
                {currentShopStatus?.location}
              </a>
            </span>
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
              Katso huomisen sijainti ja <a href="#SCHEDULE">aikataulu</a>
            </span>
          </div>
        </>
      )}
    </Container>
  );
}
