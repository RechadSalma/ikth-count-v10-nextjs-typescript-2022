import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>iK I am header</header>
      <main className="w-auto p-3">
        <Component {...pageProps} />
      </main>
      <footer>iK I am footer</footer>
    </div>
  );
}

export default MyApp;
