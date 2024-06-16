import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOMEPage from "./pages/home-page";
import PrachiTunePura from "./pages/about-half";
import AboutPage from "./pages/about-page";
import MaskGroup from "./pages/mask-group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/prachi-tune-pura-studynotion-ka-hi-about-pass-kar-diya-hain-or-tune-every-text-ke-liye-next-line-text-liya-haiese-optimize-tu-ek-rectangle-banati-or-usme-ek-hi-text-area-le-ke-kar-deti":
        title = "";
        metaDescription = "";
        break;
      case "/about-page":
        title = "";
        metaDescription = "";
        break;
      case "/mask-group":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOMEPage />} />
      <Route
        path="/prachi-tune-pura-studynotion-ka-hi-about-pass-kar-diya-hain-or-tune-every-text-ke-liye-next-line-text-liya-haiese-optimize-tu-ek-rectangle-banati-or-usme-ek-hi-text-area-le-ke-kar-deti"
        element={<PrachiTunePura />}
      />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/mask-group" element={<MaskGroup />} />
    </Routes>
  );
}
export default App;
