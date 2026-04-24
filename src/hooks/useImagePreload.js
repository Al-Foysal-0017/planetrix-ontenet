"use client";
import { useEffect, useState } from "react";

export default function useImagePreload(imageUrls = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls.length) return;

    let loadedCount = 0;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;

      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setLoaded(true);
        }
      };
    });
  }, [imageUrls]);

  return loaded;
}