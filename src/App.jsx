import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { supportedLanguages } from "./i18n/translations";

// "/" -> English, "/es" -> Spanish, "/fi" -> Finnish. Anything else is a 404.
const LocalizedHome = () => {
  const { lang } = useParams();
  if (lang && !supportedLanguages.includes(lang)) return <NotFound />;
  return <Home />;
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/:lang?" element={<LocalizedHome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
