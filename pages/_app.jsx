import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import '@/styles/styles.css';
import 'swiper/css/bundle';
import { parseCookies } from 'nookies';
import { Provider } from 'react-redux';
import { wrapper } from '@/redux/store';
import axios from 'axios';

const App = ({ Component, pageProps, ...rest }) => {
  const { store } = wrapper.useWrappedStore(rest);

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  axios.defaults.headers.post.Accept = 'application/json';
  axios.defaults.withCredentials = true;

  axios.interceptors.request.use(function (config) {
    const { token } = parseCookies();
    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  });

  return (
    <Provider store={store}>
      <ThemeProvider enableColorScheme attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
