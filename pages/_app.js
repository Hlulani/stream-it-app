// import { Provider } from "react-redux";
// import withReduxStore from "../lib/with-redux-store";
import "../styles/globals.css";

// function MyApp({ Component, pageProps, reduxStore }) {
//   return (
//     <Provider store={reduxStore}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

function MyApp  ({Component, pageProps}) {
  return (<Component {...pageProps}/>)
}

// export default withReduxStore(MyApp);
export default MyApp;
