import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "AppInsights";
import "swiper/scss";
import "swiper/scss/pagination";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <Component {...pageProps} />
    </AppInsightsContext.Provider>
  );
}
