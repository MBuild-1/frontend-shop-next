import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableColorScheme attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
