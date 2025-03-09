import React, { useState } from "react";
import {
  Check,
  Shield,
  Zap,
  Users,
  Brain,
  BarChart3,
  HardDrive,
  Calculator,
  Server,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// Storage pricing constants
const STORAGE_PRICE_PER_GB = 0.5; // $0.50 per GB
const formatStorage = (gb: number) =>
  gb < 1000 ? `${gb}GB` : `${gb / 1000}TB`;
const formatPrice = (price: number) => price.toFixed(2);

// Type for feature arrays
type FeatureList = string[];

function StorageCalculator() {
  const { t } = useTranslation();
  const [storage, setStorage] = useState<number>(100);
  const extraCost = Math.max(0, (storage - 100) * STORAGE_PRICE_PER_GB);

  return (
    <div className="bg-slate-800 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-bold text-white">
          {t("pricing.calculator.title")}
        </h3>
      </div>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="storage"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("pricing.calculator.storageLabel")}
          </label>
          <input
            type="number"
            id="storage"
            min="1"
            value={storage}
            onChange={(e) =>
              setStorage(Math.max(1, parseInt(e.target.value) || 0))
            }
            className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="bg-slate-700 rounded-lg p-4">
          <p className="text-gray-300 mb-2">
            {t("pricing.calculator.additionalCost")}:
          </p>
          <p className="text-2xl font-bold text-white">
            ${formatPrice(extraCost)}/{t("pricing.common.month")}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {t("pricing.calculator.includedStorage")}
          </p>
        </div>
      </div>
    </div>
  );
}

function PricingTier({
  name,
  price,
  description,
  features,
  storage,
  highlighted = false,
  icon: Icon,
  customPrice = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  storage: number | string;
  highlighted?: boolean;
  icon: React.ElementType;
  customPrice?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`rounded-2xl p-8 ${
        highlighted ? "bg-blue-600 text-white" : "bg-slate-800 text-gray-100"
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <Icon
          className={`w-8 h-8 ${highlighted ? "text-white" : "text-blue-400"}`}
        />
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <p className={`mb-6 ${highlighted ? "text-blue-100" : "text-gray-300"}`}>
        {description}
      </p>
      <div className="mb-4">
        {customPrice ? (
          <span className="text-2xl font-bold">
            {t("pricing.customPricing")}
          </span>
        ) : (
          <>
            <span className="text-4xl font-bold">${price}</span>
            <span className={highlighted ? "text-blue-100" : "text-gray-300"}>
              {" "}
              /{t("pricing.common.userPerMonth")}
            </span>
          </>
        )}
      </div>
      <div
        className={`flex items-center gap-2 mb-8 ${
          highlighted ? "text-blue-100" : "text-gray-300"
        }`}
      >
        <HardDrive className="w-4 h-4" />
        <span>
          {typeof storage === "number" ? formatStorage(storage) : storage}{" "}
          {t("pricing.common.storage")}
        </span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 mt-0.5 ${
                highlighted ? "text-white" : "text-blue-400"
              }`}
            />
            <span className={highlighted ? "text-blue-50" : "text-gray-300"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
          highlighted
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {customPrice ? t("pricing.contactSales") : t("pricing.getStarted")}
      </button>
    </div>
  );
}

function Pricing() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-white mb-6">
          {t("pricing.hero.title")}
        </h1>
        <p className="text-xl text-gray-300">{t("pricing.hero.description")}</p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <PricingTier
          name={t("pricing.tiers.starter.name")}
          price="9"
          description={t("pricing.tiers.starter.description")}
          storage={100}
          icon={Zap}
          features={[
            t("pricing.tiers.starter.features.teamMembers"),
            t("pricing.tiers.starter.features.storage"),
            t("pricing.tiers.starter.features.documentSize"),
            t("pricing.tiers.starter.features.analytics"),
            t("pricing.tiers.starter.features.aiProcessing"),
            t("pricing.tiers.starter.features.support"),
            t("pricing.tiers.starter.features.apiAccess"),
            t("pricing.tiers.starter.features.additionalStorage"),
          ]}
        />
        <PricingTier
          name={t("pricing.tiers.professional.name")}
          price="29"
          description={t("pricing.tiers.professional.description")}
          storage={500}
          icon={Brain}
          highlighted={true}
          features={[
            t("pricing.tiers.professional.features.teamMembers"),
            t("pricing.tiers.professional.features.storage"),
            t("pricing.tiers.professional.features.documentSize"),
            t("pricing.tiers.professional.features.analytics"),
            t("pricing.tiers.professional.features.aiProcessing"),
            t("pricing.tiers.professional.features.aiTutors"),
            t("pricing.tiers.professional.features.support"),
            t("pricing.tiers.professional.features.apiAccess"),
            t("pricing.tiers.professional.features.additionalStorage"),
          ]}
        />
        <PricingTier
          name={t("pricing.tiers.enterprise.name")}
          price="79"
          description={t("pricing.tiers.enterprise.description")}
          storage={2000}
          icon={Shield}
          features={[
            t("pricing.tiers.enterprise.features.teamMembers"),
            t("pricing.tiers.enterprise.features.storage"),
            t("pricing.tiers.enterprise.features.documentSize"),
            t("pricing.tiers.enterprise.features.analytics"),
            t("pricing.tiers.enterprise.features.aiResources"),
            t("pricing.tiers.enterprise.features.integrations"),
            t("pricing.tiers.enterprise.features.support"),
            t("pricing.tiers.enterprise.features.sla"),
            t("pricing.tiers.enterprise.features.additionalStorage"),
          ]}
        />
        <PricingTier
          name={t("pricing.tiers.onPremise.name")}
          price="custom"
          description={t("pricing.tiers.onPremise.description")}
          storage="Unlimited"
          icon={Server}
          customPrice={true}
          features={[
            t("pricing.tiers.onPremise.features.deployment"),
            t("pricing.tiers.onPremise.features.storage"),
            t("pricing.tiers.onPremise.features.documentSize"),
            t("pricing.tiers.onPremise.features.security"),
            t("pricing.tiers.onPremise.features.sourceCode"),
            t("pricing.tiers.onPremise.features.aiHosting"),
            t("pricing.tiers.onPremise.features.hardware"),
            t("pricing.tiers.onPremise.features.support"),
            t("pricing.tiers.onPremise.features.sla"),
            t("pricing.tiers.onPremise.features.licensing"),
          ]}
        />
      </div>

      {/* Storage Calculator */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          {t("pricing.calculator.sectionTitle")}
        </h2>
        <p className="text-center text-gray-300 mb-8">
          {t("pricing.calculator.description")}
        </p>
        <StorageCalculator />
      </div>

      {/* Feature Comparison */}
      <div className="bg-slate-800 rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          {t("pricing.comparison.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Users className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="text-xl font-bold text-white">
              {t("pricing.comparison.collaboration.title")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {(
                t("pricing.comparison.collaboration.features", {
                  returnObjects: true,
                }) as FeatureList
              ).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <Brain className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="text-xl font-bold text-white">
              {t("pricing.comparison.ai.title")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {(
                t("pricing.comparison.ai.features", {
                  returnObjects: true,
                }) as FeatureList
              ).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <BarChart3 className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="text-xl font-bold text-white">
              {t("pricing.comparison.analytics.title")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {(
                t("pricing.comparison.analytics.features", {
                  returnObjects: true,
                }) as FeatureList
              ).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          {t("pricing.faq.title")}
        </h2>
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {t("pricing.faq.storage.question")}
            </h3>
            <p className="text-gray-300">{t("pricing.faq.storage.answer")}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {t("pricing.faq.limit.question")}
            </h3>
            <p className="text-gray-300">{t("pricing.faq.limit.answer")}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {t("pricing.faq.change.question")}
            </h3>
            <p className="text-gray-300">{t("pricing.faq.change.answer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
