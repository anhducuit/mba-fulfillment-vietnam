import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container-section py-32 md:py-40">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{t("privacy_page.title")}</h1>

                <div className="prose prose-lg text-foreground/80 max-w-none space-y-6">
                    <p>
                        {t("privacy_page.intro")}
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">{t("privacy_page.sections.collection.title")}</h3>
                    <p>
                        {t("privacy_page.sections.collection.p1")}
                    </p>
                    <p>
                        {t("privacy_page.sections.collection.p2")}
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">{t("privacy_page.sections.usage.title")}</h3>
                    <p>
                        {t("privacy_page.sections.usage.p1")}
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">{t("privacy_page.sections.storage.title")}</h3>
                    <p>
                        {t("privacy_page.sections.storage.p1")}
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">{t("privacy_page.sections.commitment.title")}</h3>
                    <p>
                        {t("privacy_page.sections.commitment.p1")}
                    </p>
                    <p>
                        {t("privacy_page.sections.commitment.p2")}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
