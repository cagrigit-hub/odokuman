import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookOpen, Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./i18n";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <nav className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">ODoküman</span>
            </Link>

            {/* Main Menu - Visible on both desktop and mobile (md+) */}
            <div className="md:flex items-center space-x-8 hidden">
              <Link
                to="/solutions"
                className="text-gray-300 hover:text-white transition"
              >
                {t("nav.solutions")}
              </Link>
              <Link
                to="/features"
                className="text-gray-300 hover:text-white transition"
              >
                {t("nav.features")}
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white transition"
              >
                {t("nav.pricing")}
              </Link>
              <a
                href="mailto:info@elys.work"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
              >
                {t("nav.getStarted")}
              </a>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition"
              >
                <Globe className="w-5 h-5" />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition"
              >
                <Globe className="w-5 h-5" />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/solutions"
                  className="text-gray-300 hover:text-white transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.solutions")}
                </Link>
                <Link
                  to="/features"
                  className="text-gray-300 hover:text-white transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.features")}
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-white transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.pricing")}
                </Link>
                <a
                  href="mailto:info@elys.work"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition inline-block text-center"
                >
                  {t("nav.getStarted")}
                </a>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
