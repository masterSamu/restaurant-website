import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

interface currentStatus {
  is_shop_open: boolean;
  open_at: string;
  close_at: string;
  location: string;
  location_url: string;
}

export default function useFirestore() {
  const [currentShopStatus, setCurrentShopStatus] = useState<currentStatus>();

  useEffect(() => {
    const currentStatusListener = onSnapshot(
      doc(db, "shop_settings", "current_status"),
      (doc) => {
        const data = doc.data() as currentStatus;
        if (data) setCurrentShopStatus(data);
      }
    );
  }, []);

  return currentShopStatus;
}
