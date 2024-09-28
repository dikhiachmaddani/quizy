import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next'
import { createContext } from "react";
import NavbarProvider from "../providers/navbar-provider";

export const metadata: Metadata = {
  title: {
    template: '%s | Quizy Quiz',
    default: 'Quizy Quiz',
  },
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarProvider> {children} </NavbarProvider>
      </body>
    </html>
  );
}
