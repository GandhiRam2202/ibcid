import React, { useEffect } from "react";
import { toast } from "react-toastify";

const CopyProtection = () => {

  useEffect(() => {

    const showToast = () => {
      toast.error("🔒 Content is protected!", {
        autoClose: 1500
      });
    };

    // Disable Right Click
    const disableRightClick = (e) => {
      e.preventDefault();
      showToast();
    };
    document.addEventListener("contextmenu", disableRightClick);

    // Disable Copy
    const blockCopy = (e) => {
      e.preventDefault();
      showToast();
    };
    document.addEventListener("copy", blockCopy);

  



    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", blockCopy);
    
    };

  }, []);

  return null;
};

export default CopyProtection;
