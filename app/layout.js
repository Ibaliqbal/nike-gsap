import "./globals.css";
import { Shadows_Into_Light, Montserrat, Bebas_Neue } from "next/font/google";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-shadows", // Optional: You can use this variable in your CSS for the font-family
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "600"],
  variable: "--font-montserrat", // Optional: You can use this variable in your CSS for the font-family
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bebas", // Optional: You can use this variable in your CSS for the font-family
});

export const metadata = {
  title: "Nike. Just Do It",
  description: "The best shoes on the planet",
  openGraph: {
    title: "Nike. Just Do It",
    description: "The best shoes on the planet",
  },
  keywords: ["nike", "shoes", "just do it"],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bebas.variable} ${shadows.variable} body`}
      >
        <main className="main-page">{children}</main>
      </body>
    </html>
  );
}
