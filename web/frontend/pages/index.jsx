import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";

import { StoreInfoCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <StoreInfoCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
