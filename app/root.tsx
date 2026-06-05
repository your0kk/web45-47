import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { CartProvider } from "@/hooks/useCart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./app.css";

// The root layout component.  This file sets up the HTML document
// structure returned by the React Router loader.  It also wraps the
// application in the CartProvider so that any component under this
// layout can access the cart context via useCart().

export function meta() {
  return [{ title: "Ресторан Вкусно и точка" }];
}

export default function RootLayout() {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
              <Outlet />
            </main>
            <Footer />
          </div>
        </CartProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}