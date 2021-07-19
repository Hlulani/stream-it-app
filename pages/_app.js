import { Provider } from "react-redux";
import withReduxStore from "../lib/with-redux-store";
import "../styles/globals.css";

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withReduxStore(MyApp);
