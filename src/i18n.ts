import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            features: "Features",
            pricing: "Pricing",
            getStarted: "Get Started",
            solutions: "Solutions",
          },
          home: {
            poweredBy: "Powered by",
            heroTitle: "Transform Your Documentation with",
            heroTitleHighlight: "AI-Powered Intelligence",
            heroDescription:
              "Experience the future of documentation management with intelligent processing, automated organization, and smart insights.",
            tryButton: "Try ODoküman Free",
            features: {
              smartUpload: {
                title: "Smart Document Upload",
                description:
                  "Upload any document format and let our AI automatically process, categorize, and index your content.",
              },
              aiTutors: {
                title: "AI-Powered Tutors",
                description:
                  "Get instant answers and explanations from AI tutors trained on your documentation.",
              },
              autoDoc: {
                title: "Auto Documentation",
                description:
                  "Automatically generate and maintain documentation from your codebase and workflows.",
              },
              voiceControl: {
                title: "Voice Control",
                description:
                  "Navigate and search your documentation using natural voice commands.",
              },
              imageProcessing: {
                title: "Image Processing",
                description:
                  "Extract and process information from diagrams, screenshots, and technical drawings.",
              },
            },
            demoSection: "See ODoküman in Action",
            footer: {
              privacy: "Privacy Policy",
              terms: "Terms of Service",
              contact: "Contact Us",
            },
          },
          features: {
            hero: {
              title: "Powerful Features for",
              titleHighlight: "Intelligent Documentation",
              description:
                "Discover how ODoküman transforms your documentation with advanced analytics, continuous learning, and intelligent insights.",
            },
            analytics: {
              title: "Advanced Analytics Dashboard",
              usageInsights: {
                title: "Usage Insights",
                description:
                  "Track most queried topics and identify knowledge gaps in your documentation.",
              },
              searchPatterns: {
                title: "Search Patterns",
                description:
                  "Analyze user search patterns to understand what information users are looking for.",
              },
              questionAnalysis: {
                title: "Question Analysis",
                description:
                  "Identify frequently asked questions to improve documentation coverage.",
              },
            },
            learning: {
              title: "Continuous Learning System",
              adaptiveIntelligence: {
                title: "Adaptive Intelligence",
                description:
                  "System learns from user interactions to provide more accurate and relevant responses over time.",
              },
              performanceOptimization: {
                title: "Performance Optimization",
                description:
                  "Automatically improves response quality based on user feedback and usage patterns.",
              },
              smartSuggestions: {
                title: "Smart Suggestions",
                description:
                  "Proactively suggests documentation improvements based on user behavior analysis.",
              },
            },
            apiDocs: {
              title: "Intelligent API Documentation",
              autoGenerated: {
                title: "Auto-Generated API Docs",
                description:
                  "Automatically generate comprehensive API documentation from your codebase with intelligent parsing.",
              },
              versionControl: {
                title: "Version Control Integration",
                description:
                  "Seamlessly integrate with your version control system to keep documentation in sync with code changes.",
              },
              apiExplorer: {
                title: "Interactive API Explorer",
                description:
                  "Test and explore API endpoints directly within the documentation interface.",
              },
            },
            global: {
              title: "Global Features",
              multiLanguage: {
                title: "Multi-Language Support",
                description:
                  "Automatically translate documentation into multiple languages while maintaining context and technical accuracy.",
              },
              versionHistory: {
                title: "Version History",
                description:
                  "Track and manage documentation versions with automatic change tracking and rollback capabilities.",
              },
              workflow: {
                title: "Workflow Automation",
                description:
                  "Automate documentation workflows with custom triggers and actions for content updates.",
              },
            },
            enterprise: {
              title: "Enterprise Features",
              collaboration: {
                title: "Multi-User Collaboration",
                description:
                  "Enable team collaboration with shared documentation spaces and role-based access control.",
              },
              security: {
                title: "Enterprise-Grade Security",
                description:
                  "Ensure your documentation is protected with advanced security features and encryption.",
              },
            },
          },
          pricing: {
            hero: {
              title: "Simple, Transparent Pricing",
              description:
                "Choose the perfect plan for your team. All plans include AI-powered features with flexible storage options.",
            },
            common: {
              month: "month",
              userPerMonth: "user/month",
              storage: "storage",
            },
            customPricing: "Custom Pricing",
            contactSales: "Contact Sales",
            getStarted: "Get Started",
            calculator: {
              title: "Storage Calculator",
              sectionTitle: "Calculate Your Storage Costs",
              description:
                "For cloud-hosted plans only. On-premise deployments include unlimited storage.",
              storageLabel: "Estimated storage needs (GB)",
              additionalCost: "Additional storage cost",
              includedStorage: "First 100GB included in base plan",
            },
            tiers: {
              starter: {
                name: "Starter",
                description:
                  "Perfect for small teams getting started with documentation",
                features: {
                  teamMembers: "Up to 5 team members",
                  storage: "100GB storage included",
                  documentSize: "Documents up to 25MB each",
                  analytics: "Basic analytics",
                  aiProcessing: "Standard AI processing",
                  support: "Email support",
                  apiAccess: "Basic API access",
                  additionalStorage: "$0.50/GB for additional storage",
                },
              },
              professional: {
                name: "Professional",
                description:
                  "Advanced features for growing teams and organizations",
                features: {
                  teamMembers: "Up to 20 team members",
                  storage: "500GB storage included",
                  documentSize: "Documents up to 100MB each",
                  analytics: "Advanced analytics",
                  aiProcessing: "Priority AI processing",
                  aiTutors: "Custom AI tutors",
                  support: "Priority support",
                  apiAccess: "Full API access",
                  additionalStorage: "$0.50/GB for additional storage",
                },
              },
              enterprise: {
                name: "Enterprise",
                description: "Custom solutions for large organizations",
                features: {
                  teamMembers: "Unlimited team members",
                  storage: "2TB storage included",
                  documentSize: "Documents up to 500MB each",
                  analytics: "Custom analytics",
                  aiResources: "Dedicated AI resources",
                  integrations: "Custom integrations",
                  support: "24/7 priority support",
                  sla: "SLA guarantee",
                  additionalStorage: "$0.40/GB for additional storage",
                },
              },
              onPremise: {
                name: "On-Premise",
                description:
                  "Self-hosted solution with complete control and unlimited storage",
                features: {
                  deployment: "Self-hosted deployment",
                  storage: "Unlimited storage",
                  documentSize: "Unlimited document size",
                  security: "Custom security policies",
                  sourceCode: "Source code access",
                  aiHosting: "Custom AI model hosting",
                  hardware: "Hardware optimization",
                  support: "Dedicated support team",
                  sla: "Custom SLA",
                  licensing: "Annual licensing",
                },
              },
            },
            comparison: {
              title: "Compare Features",
              collaboration: {
                title: "Team Collaboration",
                features: [
                  "Shared workspaces",
                  "Role-based access",
                  "Real-time collaboration",
                ],
              },
              ai: {
                title: "AI Features",
                features: [
                  "Smart document processing",
                  "Custom AI tutors",
                  "Automated documentation",
                ],
              },
              analytics: {
                title: "Analytics",
                features: [
                  "Usage insights",
                  "Performance metrics",
                  "Custom reports",
                ],
              },
            },
            faq: {
              title: "Frequently Asked Questions",
              storage: {
                question: "How is storage calculated?",
                answer:
                  "Storage is calculated based on the total size of all your documents. Each cloud plan includes a base storage amount, and additional storage is billed at $0.50/GB/month (or $0.40/GB/month for Enterprise plans). On-premise deployments include unlimited storage.",
              },
              limit: {
                question: "What happens if I exceed my storage limit?",
                answer:
                  "For cloud plans, you'll automatically be billed for additional storage at the rate specified in your plan. We'll notify you when you reach 80% of your included storage. On-premise deployments have no storage limits.",
              },
              change: {
                question: "Can I change my plan later?",
                answer:
                  "Yes, you can upgrade or downgrade your cloud plan at any time. Changes will be reflected in your next billing cycle. For on-premise deployments, please contact our sales team to discuss licensing options.",
              },
            },
          },
          solutions: {
            heroTitle: "Intelligent Solutions for",
            heroTitleHighlight: "Modern Documentation",
            heroDescription:
              "Discover how our AI-powered platform transforms the way you manage, interact with, and learn from your documentation.",

            documentSystem: {
              title: "AI-Powered Document System",
              description:
                "Experience a revolutionary approach to document management with advanced AI capabilities.",
              features: {
                ai: {
                  title: "Intelligent Processing",
                  description:
                    "Advanced AI algorithms analyze and understand your documents, making information instantly accessible.",
                },
                qa: {
                  title: "Smart Q&A System",
                  description:
                    "Get instant, accurate answers to questions about your documentation with our context-aware AI.",
                },
                analytics: {
                  title: "Advanced Analytics",
                  description:
                    "Gain deep insights into document usage, popular topics, and knowledge gaps with comprehensive analytics.",
                },
              },
            },

            aiTutors: {
              title: "Create Custom AI Tutors",
              description:
                "Transform your documentation into interactive learning experiences with personalized AI tutors.",
              features: {
                personalized: {
                  title: "Personalized Learning",
                  description:
                    "AI tutors adapt to individual learning styles and knowledge levels for optimal understanding.",
                },
                interactive: {
                  title: "Interactive Sessions",
                  description:
                    "Engage in natural conversations with AI tutors to explore and understand complex topics.",
                },
                collaboration: {
                  title: "Team Learning",
                  description:
                    "Foster collaboration with shared learning spaces and group tutorials guided by AI.",
                },
              },
            },

            cta: {
              title: "Ready to Transform Your Documentation?",
              description:
                "Join leading organizations that are already revolutionizing their documentation management with ODoküman.",
              button: "Contact Us Today",
            },

            enterprise: {
              title: "Enterprise Integration & Security",
              description:
                "Seamlessly integrate with your existing systems while maintaining enterprise-grade security.",
              features: {
                integration: {
                  title: "System Integration",
                  description:
                    "Connect with your existing tools and workflows through our comprehensive API and integration options.",
                },
                security: {
                  title: "Advanced Security",
                  description:
                    "Protect your documentation with enterprise-grade encryption, access controls, and compliance features.",
                },
                audit: {
                  title: "Audit & Compliance",
                  description:
                    "Maintain detailed audit trails and ensure compliance with industry regulations and internal policies.",
                },
              },
            },

            global: {
              title: "Multi-Language Support",
              description:
                "Break down language barriers with intelligent translation and localization features.",
              features: {
                translation: {
                  title: "Smart Translation",
                  description:
                    "Automatically translate documentation while preserving technical accuracy and context.",
                },
                localization: {
                  title: "Content Localization",
                  description:
                    "Adapt content for different regions while maintaining consistency across all versions.",
                },
                collaboration: {
                  title: "Global Collaboration",
                  description:
                    "Enable teams to work together across languages with real-time translation and collaboration tools.",
                },
              },
            },

            workflow: {
              title: "Workflow Automation",
              description:
                "Streamline your documentation processes with intelligent automation.",
              features: {
                automation: {
                  title: "Smart Workflows",
                  description:
                    "Automate routine documentation tasks with customizable workflows and triggers.",
                },
                version: {
                  title: "Version Control",
                  description:
                    "Track changes, manage versions, and maintain documentation history with automatic versioning.",
                },
                review: {
                  title: "Review Process",
                  description:
                    "Streamline review cycles with automated assignments, notifications, and approval workflows.",
                },
              },
            },
          },
        },
      },
      tr: {
        translation: {
          nav: {
            features: "Özellikler",
            pricing: "Fiyatlandırma",
            getStarted: "Başlayın",
            solutions: "Çözümler",
          },
          home: {
            poweredBy: "Destekleyen",
            heroTitle: "Dokümantasyonunuzu Dönüştürün",
            heroTitleHighlight: "Yapay Zeka Destekli Akıl İle",
            heroDescription:
              "Akıllı işleme, otomatik organizasyon ve akıllı içgörülerle dokümantasyon yönetiminin geleceğini deneyimleyin.",
            tryButton: "ODoküman'ı Ücretsiz Deneyin",
            features: {
              smartUpload: {
                title: "Akıllı Belge Yükleme",
                description:
                  "Herhangi bir belge formatını yükleyin ve yapay zekamızın içeriğinizi otomatik olarak işlemesine, kategorize etmesine ve indekslemesine izin verin.",
              },
              aiTutors: {
                title: "Yapay Zeka Destekli Eğitmenler",
                description:
                  "Dokümantasyonunuz üzerinde eğitilmiş yapay zeka eğitmenlerinden anında yanıtlar ve açıklamalar alın.",
              },
              autoDoc: {
                title: "Otomatik Dokümantasyon",
                description:
                  "Kod tabanınızdan ve iş akışlarınızdan otomatik olarak dokümantasyon oluşturun ve sürdürün.",
              },
              voiceControl: {
                title: "Sesli Kontrol",
                description:
                  "Doğal ses komutlarını kullanarak dokümantasyonunuzda gezinin ve arama yapın.",
              },
              imageProcessing: {
                title: "Görüntü İşleme",
                description:
                  "Diyagramlar, ekran görüntüleri ve teknik çizimlerden bilgi çıkarın ve işleyin.",
              },
            },
            demoSection: "ODoküman'ı İş Başında Görün",
            footer: {
              privacy: "Gizlilik Politikası",
              terms: "Kullanım Koşulları",
              contact: "Bize Ulaşın",
            },
          },
          features: {
            hero: {
              title: "Güçlü Özellikler ile",
              titleHighlight: "Akıllı Dokümantasyon",
              description:
                "ODoküman'ın gelişmiş analitik, sürekli öğrenme ve akıllı içgörüler ile dokümantasyonunuzu nasıl dönüştürdüğünü keşfedin.",
            },
            analytics: {
              title: "Gelişmiş Analitik Paneli",
              usageInsights: {
                title: "Kullanım İçgörüleri",
                description:
                  "En çok sorgulanan konuları takip edin ve dokümantasyonunuzdaki bilgi boşluklarını belirleyin.",
              },
              searchPatterns: {
                title: "Arama Kalıpları",
                description:
                  "Kullanıcıların hangi bilgileri aradığını anlamak için arama kalıplarını analiz edin.",
              },
              questionAnalysis: {
                title: "Soru Analizi",
                description:
                  "Dokümantasyon kapsamını iyileştirmek için sık sorulan soruları belirleyin.",
              },
            },
            learning: {
              title: "Sürekli Öğrenme Sistemi",
              adaptiveIntelligence: {
                title: "Uyarlanabilir Zeka",
                description:
                  "Sistem, zamanla daha doğru ve alakalı yanıtlar sağlamak için kullanıcı etkileşimlerinden öğrenir.",
              },
              performanceOptimization: {
                title: "Performans Optimizasyonu",
                description:
                  "Kullanıcı geri bildirimleri ve kullanım kalıplarına dayalı olarak yanıt kalitesini otomatik olarak iyileştirir.",
              },
              smartSuggestions: {
                title: "Akıllı Öneriler",
                description:
                  "Kullanıcı davranış analizine dayalı olarak dokümantasyon iyileştirmeleri proaktif olarak önerir.",
              },
            },
            apiDocs: {
              title: "Akıllı API Dokümantasyonu",
              autoGenerated: {
                title: "Otomatik Oluşturulan API Dokümanları",
                description:
                  "Akıllı ayrıştırma ile kod tabanınızdan kapsamlı API dokümantasyonu otomatik olarak oluşturun.",
              },
              versionControl: {
                title: "Versiyon Kontrol Entegrasyonu",
                description:
                  "Dokümantasyonu kod değişiklikleriyle senkronize tutmak için versiyon kontrol sisteminizle sorunsuz entegre edin.",
              },
              apiExplorer: {
                title: "Etkileşimli API Gezgini",
                description:
                  "Dokümantasyon arayüzü içinde API uç noktalarını doğrudan test edin ve keşfedin.",
              },
            },
            global: {
              title: "Genel Özellikler",
              multiLanguage: {
                title: "Çoklu Dil Desteği",
                description:
                  "Dokümantasyonu bağlamı ve teknik doğruluğu koruyarak otomatik olarak birden çok dile çevirin.",
              },
              versionHistory: {
                title: "Versiyon Geçmişi",
                description:
                  "Otomatik değişiklik takibi ve geri alma özellikleriyle dokümantasyon versiyonlarını takip edin ve yönetin.",
              },
              workflow: {
                title: "İş Akışı Otomasyonu",
                description:
                  "İçerik güncellemeleri için özel tetikleyiciler ve eylemlerle dokümantasyon iş akışlarını otomatikleştirin.",
              },
            },
            enterprise: {
              title: "Kurumsal Özellikler",
              collaboration: {
                title: "Çoklu Kullanıcı İş Birliği",
                description:
                  "Paylaşılan dokümantasyon alanları ve rol tabanlı erişim kontrolü ile ekip iş birliğini etkinleştirin.",
              },
              security: {
                title: "Kurumsal Düzeyde Güvenlik",
                description:
                  "Dokümantasyonunuzun gelişmiş güvenlik özellikleri ve şifreleme ile korunmasını sağlayın.",
              },
            },
          },
          pricing: {
            hero: {
              title: "Basit, Şeffaf Fiyatlandırma",
              description:
                "Ekibiniz için mükemmel planı seçin. Tüm planlar, esnek depolama seçenekleriyle AI destekli özellikler içerir.",
            },
            common: {
              month: "ay",
              userPerMonth: "kullanıcı/ay",
              storage: "depolama",
            },
            customPricing: "Özel Fiyatlandırma",
            contactSales: "Satış Ekibiyle İletişime Geçin",
            getStarted: "Başlayın",
            calculator: {
              title: "Depolama Hesaplayıcı",
              sectionTitle: "Depolama Maliyetlerinizi Hesaplayın",
              description:
                "Yalnızca bulut tabanlı planlar için. Yerinde kurulumlar sınırsız depolama içerir.",
              storageLabel: "Tahmini depolama ihtiyacı (GB)",
              additionalCost: "Ek depolama maliyeti",
              includedStorage: "İlk 100GB temel planda dahildir",
            },
            tiers: {
              starter: {
                name: "Başlangıç",
                description:
                  "Dokümantasyona başlayan küçük ekipler için mükemmel",
                features: {
                  teamMembers: "5 ekip üyesine kadar",
                  storage: "100GB depolama dahil",
                  documentSize: "25MB'a kadar belge boyutu",
                  analytics: "Temel analitik",
                  aiProcessing: "Standart AI işleme",
                  support: "E-posta desteği",
                  apiAccess: "Temel API erişimi",
                  additionalStorage: "Ek depolama için GB başına $0.50",
                },
              },
              professional: {
                name: "Profesyonel",
                description:
                  "Büyüyen ekipler ve organizasyonlar için gelişmiş özellikler",
                features: {
                  teamMembers: "20 ekip üyesine kadar",
                  storage: "500GB depolama dahil",
                  documentSize: "100MB'a kadar belge boyutu",
                  analytics: "Gelişmiş analitik",
                  aiProcessing: "Öncelikli AI işleme",
                  aiTutors: "Özel AI eğitmenleri",
                  support: "Öncelikli destek",
                  apiAccess: "Tam API erişimi",
                  additionalStorage: "Ek depolama için GB başına $0.50",
                },
              },
              enterprise: {
                name: "Kurumsal",
                description: "Büyük organizasyonlar için özel çözümler",
                features: {
                  teamMembers: "Sınırsız ekip üyesi",
                  storage: "2TB depolama dahil",
                  documentSize: "500MB'a kadar belge boyutu",
                  analytics: "Özel analitik",
                  aiResources: "Özel AI kaynakları",
                  integrations: "Özel entegrasyonlar",
                  support: "7/24 öncelikli destek",
                  sla: "SLA garantisi",
                  additionalStorage: "Ek depolama için GB başına $0.40",
                },
              },
              onPremise: {
                name: "Yerinde Kurulum",
                description:
                  "Tam kontrol ve sınırsız depolama ile kendi ortamınızda barındırın",
                features: {
                  deployment: "Yerinde kurulum",
                  storage: "Sınırsız depolama",
                  documentSize: "Sınırsız belge boyutu",
                  security: "Özel güvenlik politikaları",
                  sourceCode: "Kaynak kodu erişimi",
                  aiHosting: "Özel AI model barındırma",
                  hardware: "Donanım optimizasyonu",
                  support: "Özel destek ekibi",
                  sla: "Özel SLA",
                  licensing: "Yıllık lisanslama",
                },
              },
            },
            comparison: {
              title: "Özellikleri Karşılaştırın",
              collaboration: {
                title: "Ekip İş Birliği",
                features: [
                  "Paylaşılan çalışma alanları",
                  "Rol tabanlı erişim",
                  "Gerçek zamanlı iş birliği",
                ],
              },
              ai: {
                title: "AI Özellikleri",
                features: [
                  "Akıllı belge işleme",
                  "Özel AI eğitmenleri",
                  "Otomatik dokümantasyon",
                ],
              },
              analytics: {
                title: "Analitik",
                features: [
                  "Kullanım içgörüleri",
                  "Performans metrikleri",
                  "Özel raporlar",
                ],
              },
            },
            faq: {
              title: "Sıkça Sorulan Sorular",
              storage: {
                question: "Depolama nasıl hesaplanır?",
                answer:
                  "Depolama, tüm belgelerinizin toplam boyutuna göre hesaplanır. Her bulut planı temel bir depolama miktarı içerir ve ek depolama GB başına aylık $0.50 (veya Kurumsal planlar için $0.40) olarak faturalandırılır. Yerinde kurulumlar sınırsız depolama içerir.",
              },
              limit: {
                question: "Depolama limitimi aşarsam ne olur?",
                answer:
                  "Bulut planları için, planınızda belirtilen oranda ek depolama için otomatik olarak faturalandırılırsınız. Dahil olan depolamanızın %80'ine ulaştığınızda sizi bilgilendireceğiz. Yerinde kurulumların depolama sınırı yoktur.",
              },
              change: {
                question: "Planımı daha sonra değiştirebilir miyim?",
                answer:
                  "Evet, bulut planınızı istediğiniz zaman yükseltebilir veya düşürebilirsiniz. Değişiklikler bir sonraki fatura döneminde yansıtılacaktır. Yerinde kurulumlar için lisanslama seçeneklerini görüşmek üzere lütfen satış ekibimizle iletişime geçin.",
              },
            },
          },
          solutions: {
            heroTitle: "Modern Dokümantasyon için",
            heroTitleHighlight: "Akıllı Çözümler",
            heroDescription:
              "Yapay zeka destekli platformumuzun dokümantasyonunuzu nasıl yönettiğini, etkileşime geçtiğini ve öğrendiğini keşfedin.",

            documentSystem: {
              title: "Yapay Zeka Destekli Doküman Sistemi",
              description:
                "Gelişmiş yapay zeka özellikleriyle devrim niteliğinde bir doküman yönetim deneyimi yaşayın.",
              features: {
                ai: {
                  title: "Akıllı İşleme",
                  description:
                    "Gelişmiş yapay zeka algoritmaları dokümanlarınızı analiz eder ve anlar, bilgileri anında erişilebilir hale getirir.",
                },
                qa: {
                  title: "Akıllı Soru-Cevap Sistemi",
                  description:
                    "Bağlam duyarlı yapay zekamızla dokümantasyonunuz hakkındaki sorulara anında ve doğru yanıtlar alın.",
                },
                analytics: {
                  title: "Gelişmiş Analitik",
                  description:
                    "Kapsamlı analizlerle doküman kullanımı, popüler konular ve bilgi boşlukları hakkında derin içgörüler elde edin.",
                },
              },
            },

            aiTutors: {
              title: "Özel Yapay Zeka Eğitmenleri Oluşturun",
              description:
                "Dokümantasyonunuzu kişiselleştirilmiş yapay zeka eğitmenleriyle interaktif öğrenme deneyimlerine dönüştürün.",
              features: {
                personalized: {
                  title: "Kişiselleştirilmiş Öğrenme",
                  description:
                    "Yapay zeka eğitmenleri, optimal anlayış için bireysel öğrenme stillerine ve bilgi seviyelerine uyum sağlar.",
                },
                interactive: {
                  title: "İnteraktif Oturumlar",
                  description:
                    "Karmaşık konuları keşfetmek ve anlamak için yapay zeka eğitmenleriyle doğal sohbetler gerçekleştirin.",
                },
                collaboration: {
                  title: "Takım Öğrenmesi",
                  description:
                    "Yapay zeka rehberliğinde paylaşılan öğrenme alanları ve grup eğitimleriyle işbirliğini teşvik edin.",
                },
              },
            },

            cta: {
              title: "Dokümantasyonunuzu Dönüştürmeye Hazır mısınız?",
              description:
                "ODoküman ile dokümantasyon yönetiminde devrim yaratan önde gelen kuruluşlara katılın.",
              button: "Hemen İletişime Geçin",
            },

            enterprise: {
              title: "Kurumsal Entegrasyon ve Güvenlik",
              description:
                "Kurumsal düzeyde güvenliği korurken mevcut sistemlerinizle sorunsuz entegrasyon.",
              features: {
                integration: {
                  title: "Sistem Entegrasyonu",
                  description:
                    "Kapsamlı API ve entegrasyon seçeneklerimizle mevcut araçlarınıza ve iş akışlarınıza bağlanın.",
                },
                security: {
                  title: "Gelişmiş Güvenlik",
                  description:
                    "Dokümantasyonunuzu kurumsal düzeyde şifreleme, erişim kontrolleri ve uyumluluk özellikleriyle koruyun.",
                },
                audit: {
                  title: "Denetim ve Uyumluluk",
                  description:
                    "Detaylı denetim kayıtları tutun ve endüstri düzenlemeleri ile iç politikalara uyumu sağlayın.",
                },
              },
            },

            global: {
              title: "Çoklu Dil Desteği",
              description:
                "Akıllı çeviri ve yerelleştirme özellikleriyle dil bariyerlerini aşın.",
              features: {
                translation: {
                  title: "Akıllı Çeviri",
                  description:
                    "Teknik doğruluğu ve bağlamı koruyarak dokümantasyonu otomatik olarak çevirin.",
                },
                localization: {
                  title: "İçerik Yerelleştirme",
                  description:
                    "Tüm versiyonlar arasında tutarlılığı koruyarak içeriği farklı bölgeler için uyarlayın.",
                },
                collaboration: {
                  title: "Global İş Birliği",
                  description:
                    "Gerçek zamanlı çeviri ve iş birliği araçlarıyla ekiplerin farklı dillerde birlikte çalışmasını sağlayın.",
                },
              },
            },

            workflow: {
              title: "İş Akışı Otomasyonu",
              description:
                "Akıllı otomasyon ile dokümantasyon süreçlerinizi optimize edin.",
              features: {
                automation: {
                  title: "Akıllı İş Akışları",
                  description:
                    "Özelleştirilebilir iş akışları ve tetikleyicilerle rutin dokümantasyon görevlerini otomatikleştirin.",
                },
                version: {
                  title: "Versiyon Kontrolü",
                  description:
                    "Otomatik sürüm oluşturma ile değişiklikleri takip edin, sürümleri yönetin ve dokümantasyon geçmişini koruyun.",
                },
                review: {
                  title: "İnceleme Süreci",
                  description:
                    "Otomatik atamalar, bildirimler ve onay iş akışlarıyla inceleme döngülerini optimize edin.",
                },
              },
            },
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
