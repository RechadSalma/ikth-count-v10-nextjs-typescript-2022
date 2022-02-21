import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className={`bg-success p-2 text-white bg-opacity-75`}>
        iK I am header
      </header>

      <main className="container  py-1">
        <Component {...pageProps} />
      </main>

      <footer className={`bg-success p-2 text-white bg-opacity-75`}>
        iK I am footer
      </footer>
    </div>
  );
}

export default MyApp;
