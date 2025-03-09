import React from "react";
import { useTranslation } from "react-i18next";
import {
  Brain,
  MessageSquare,
  BarChart3,
  GraduationCap,
  FileQuestion,
  Users,
  Network,
  Shield,
  FileCheck,
  Globe,
  Languages,
  Users2,
  Workflow,
  GitBranch,
  ClipboardCheck,
} from "lucide-react";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-500/10 rounded-lg mr-4">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

function Solutions() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-white mb-6">
          {t("solutions.heroTitle")}{" "}
          <span className="text-blue-400">
            {t("solutions.heroTitleHighlight")}
          </span>
        </h1>
        <p className="text-xl text-gray-300">
          {t("solutions.heroDescription")}
        </p>
      </div>

      {/* AI-Powered Document System Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("solutions.documentSystem.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("solutions.documentSystem.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon={<Brain className="w-6 h-6 text-blue-400" />}
            title={t("solutions.documentSystem.features.ai.title")}
            description={t("solutions.documentSystem.features.ai.description")}
          />
          <SolutionCard
            icon={<MessageSquare className="w-6 h-6 text-blue-400" />}
            title={t("solutions.documentSystem.features.qa.title")}
            description={t("solutions.documentSystem.features.qa.description")}
          />
          <SolutionCard
            icon={<BarChart3 className="w-6 h-6 text-blue-400" />}
            title={t("solutions.documentSystem.features.analytics.title")}
            description={t(
              "solutions.documentSystem.features.analytics.description"
            )}
          />
        </div>
      </section>

      {/* AI Tutors Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("solutions.aiTutors.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("solutions.aiTutors.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon={<GraduationCap className="w-6 h-6 text-blue-400" />}
            title={t("solutions.aiTutors.features.personalized.title")}
            description={t(
              "solutions.aiTutors.features.personalized.description"
            )}
          />
          <SolutionCard
            icon={<FileQuestion className="w-6 h-6 text-blue-400" />}
            title={t("solutions.aiTutors.features.interactive.title")}
            description={t(
              "solutions.aiTutors.features.interactive.description"
            )}
          />
          <SolutionCard
            icon={<Users className="w-6 h-6 text-blue-400" />}
            title={t("solutions.aiTutors.features.collaboration.title")}
            description={t(
              "solutions.aiTutors.features.collaboration.description"
            )}
          />
        </div>
      </section>

      {/* Enterprise Integration Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("solutions.enterprise.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("solutions.enterprise.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon={<Network className="w-6 h-6 text-blue-400" />}
            title={t("solutions.enterprise.features.integration.title")}
            description={t(
              "solutions.enterprise.features.integration.description"
            )}
          />
          <SolutionCard
            icon={<Shield className="w-6 h-6 text-blue-400" />}
            title={t("solutions.enterprise.features.security.title")}
            description={t(
              "solutions.enterprise.features.security.description"
            )}
          />
          <SolutionCard
            icon={<FileCheck className="w-6 h-6 text-blue-400" />}
            title={t("solutions.enterprise.features.audit.title")}
            description={t("solutions.enterprise.features.audit.description")}
          />
        </div>
      </section>

      {/* Multi-Language Support Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("solutions.global.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("solutions.global.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon={<Globe className="w-6 h-6 text-blue-400" />}
            title={t("solutions.global.features.translation.title")}
            description={t("solutions.global.features.translation.description")}
          />
          <SolutionCard
            icon={<Languages className="w-6 h-6 text-blue-400" />}
            title={t("solutions.global.features.localization.title")}
            description={t(
              "solutions.global.features.localization.description"
            )}
          />
          <SolutionCard
            icon={<Users2 className="w-6 h-6 text-blue-400" />}
            title={t("solutions.global.features.collaboration.title")}
            description={t(
              "solutions.global.features.collaboration.description"
            )}
          />
        </div>
      </section>

      {/* Workflow Automation Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("solutions.workflow.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("solutions.workflow.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon={<Workflow className="w-6 h-6 text-blue-400" />}
            title={t("solutions.workflow.features.automation.title")}
            description={t(
              "solutions.workflow.features.automation.description"
            )}
          />
          <SolutionCard
            icon={<GitBranch className="w-6 h-6 text-blue-400" />}
            title={t("solutions.workflow.features.version.title")}
            description={t("solutions.workflow.features.version.description")}
          />
          <SolutionCard
            icon={<ClipboardCheck className="w-6 h-6 text-blue-400" />}
            title={t("solutions.workflow.features.review.title")}
            description={t("solutions.workflow.features.review.description")}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          {t("solutions.cta.title")}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t("solutions.cta.description")}
        </p>
        <a
          href="mailto:info@elys.work"
          className="inline-block bg-white text-blue-600 text-lg px-8 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          {t("solutions.cta.button")}
        </a>
      </section>
    </div>
  );
}

export default Solutions;
