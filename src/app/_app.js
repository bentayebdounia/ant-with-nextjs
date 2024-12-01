import 'antd/dist/antd.css'; // Import des styles Ant Design
import '../styles/globals.css'; // Si tu as des styles globaux personnalisés

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
