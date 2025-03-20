import "./globals.css";

export const metadata = {
  title: "Modern Essence",
  description: "Created by MightyMyza Studios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary mx-auto font-roboto text-white">
        {children}
      </body>
    </html>
  );
}
