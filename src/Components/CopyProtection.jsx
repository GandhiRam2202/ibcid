import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const CopyProtection = () => {
  const toastCooldown = useRef(false);

  // Make toast appear only once per 1 second
  const showToast = () => {
    if (toastCooldown.current) return;
    toastCooldown.current = true;

    toast.error("🔒 Content is protected!", { autoClose: 1000 });

    setTimeout(() => {
      toastCooldown.current = false;
    }, 1200);
  };

  useEffect(() => {
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

    // Disable Text Select
    const blockSelect = (e) => {
      e.preventDefault();
      showToast();
    };
    document.addEventListener("selectstart", blockSelect);

    // Disable Long Press on Mobile
    const blockTouch = (e) => {
      if (e.touches.length > 1) return; // Ignore pinch zoom
      e.preventDefault();
      showToast();
    };
    document.addEventListener("touchstart", blockTouch, { passive: false });

    // Disable image dragging
    const disableDrag = () => {
      document.querySelectorAll("img").forEach((img) => {
        img.draggable = false;
        img.addEventListener("dragstart", (e) => e.preventDefault());
      });
    };

    disableDrag();
    const interval = setInterval(disableDrag, 1000); // For dynamically loaded images

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("selectstart", blockSelect);
      document.removeEventListener("touchstart", blockTouch);
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default CopyProtection;
