import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Modern Essence",
  description: "Created by MightyMyza Studios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}
