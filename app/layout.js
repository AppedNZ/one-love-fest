import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "One Love '25",
  description: "One Love '25 - Katahi Aroha reggae festival",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
