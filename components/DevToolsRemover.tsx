"use client";
import { useEffect } from "react";

export default function DevToolsRemover() {
  useEffect(() => {
    // Remove Next.js dev tools button
    const devToolsButton = document.querySelector('button[aria-label*="Dev Tools"]');
    if (devToolsButton) {
      devToolsButton.remove();
    }
    
    // Alternative: remove by looking for button with N icon
    const buttons = document.querySelectorAll('body > button');
    buttons.forEach((button) => {
      if (button.textContent?.includes('N') || button.getAttribute('aria-label')?.includes('Next')) {
        button.remove();
      }
    });
  }, []);

  return null;
}
