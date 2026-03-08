import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import {useEffect} from "react";
import type { Route } from "./+types/root";
import "./css/styles-v2.scss";
import { ThemeProvider } from "@rescui/ui-contexts";
import Footer from "./components/footer";
import Header from "./components/header";

function GTMScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5P98');`;
    document.head.appendChild(script);
  }, []);
  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//resources.jetbrains.com" />

        {/* Font preloads */}
        <link rel="preload" href="/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kotlinlang.org/" />
        <meta property="og:image" content="https://kotlinlang.org/images/open-graph/general.png" />
        <meta property="og:site_name" content="Kotlin" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kotlin" />
        <meta name="twitter:image:src" content="https://kotlinlang.org/images/twitter/general.png" />

        <Meta />
        <Links />
      </head>
      <body className="page__index-new">
        <ThemeProvider theme="dark">
        <div className="global-layout">
          <Header hasSearch={false} dropdownTheme="dark" currentUrl="/" productWebUrl="https://github.com/JetBrains/kotlin/releases/tag/v1.6.20" />
          <div className="g-layout global-content">
            {children}
          </div>
          <Footer />
        </div>
        <GTMScript />
        <ScrollRestoration />
        <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
