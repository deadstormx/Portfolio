"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

/**
 * Fixed: removed next-themes dependency (not used in this project).
 * Theme is managed manually via ThemeToggle + localStorage.
 * The Toaster reads the dark class from <html> automatically via the
 * `theme="system"` prop and the CSS variables already defined in theme.css.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
