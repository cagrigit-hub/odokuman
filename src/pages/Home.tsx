import React from "react";
import { Upload, BookOpen, FileText, Mic, Image, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import FeatureCard from "../components/FeatureCard";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center ">
            <BookOpen className="w-8 h-8 text-blue-400 mr-2" />
            <h2 className="text-2xl font-bold text-white">ODoküman</h2>
          </div>
          <p className="text-blue-400 text-base mb-3">
            {t("home.poweredBy")}{" "}
            <a
              href="https://elys.work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium underline decoration-2 hover:text-blue-300"
            >
              Elys
            </a>
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            {t("home.heroTitle")}{" "}
            <span className="text-blue-400">
              {t("home.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {t("home.heroDescription")}
          </p>
          <a
            href="mailto:info@elys.work"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg transition"
          >
            {t("home.tryButton")}
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Upload className="w-8 h-8 text-blue-400" />}
            title={t("home.features.smartUpload.title")}
            description={t("home.features.smartUpload.description")}
          />
          <FeatureCard
            icon={<Bot className="w-8 h-8 text-blue-400" />}
            title={t("home.features.aiTutors.title")}
            description={t("home.features.aiTutors.description")}
          />
          <FeatureCard
            icon={<FileText className="w-8 h-8 text-blue-400" />}
            title={t("home.features.autoDoc.title")}
            description={t("home.features.autoDoc.description")}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureCard
            icon={<Mic className="w-8 h-8 text-blue-400" />}
            title={t("home.features.voiceControl.title")}
            description={t("home.features.voiceControl.description")}
          />
          <FeatureCard
            icon={<Image className="w-8 h-8 text-blue-400" />}
            title={t("home.features.imageProcessing.title")}
            description={t("home.features.imageProcessing.description")}
          />
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          {t("home.demoSection")}
        </h2>
        <div className="bg-slate-800 rounded-xl p-8 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="ODoküman Dashboard"
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6" />
            <span className="text-xl font-bold">ODoküman</span>
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition">
              {t("home.footer.privacy")}
            </a>
            <a href="#" className="hover:text-white transition">
              {t("home.footer.terms")}
            </a>
            <a href="#" className="hover:text-white transition">
              {t("home.footer.contact")}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
