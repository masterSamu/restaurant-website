import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

export default function useFirestore() {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const isOpenListener = onSnapshot(doc(db, "shop_settings", "current_status"), (doc) => {
        const data = doc.data();
        setOpen(data?.shop_open);
    });
  }, []);
  
  return isOpen;
}
