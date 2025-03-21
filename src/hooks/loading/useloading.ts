"use client";

import { useState, useEffect } from "react";

export const useLoading = (delay: number = 300) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { isLoading };
};