import { useState } from "react";
import { Text, AlphaCard, Spinner } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useAppQuery } from "../hooks";

export function StoreInfoCard() {
  const [isError, setIsError] = useState(false);

  const { data, isLoading: isLoadingStoreData } = useAppQuery({
    url: "/api/store/config",
    reactQueryOptions: {
      onError: (error) => {
        setIsError(true);
        console.error(error);
      },
    },
  });

  const storeData = data?.data?.[0];

  const toastMarkup = isError ? (
    <Toast
      content="Unable to retrieve store data"
      error
      onDismiss={() => setIsError(false)}
    />
  ) : null;

  return (
    <>
      <AlphaCard>
        {toastMarkup}
        {isLoadingStoreData ? (
          <Spinner size="small" />
        ) : (
          <>
            <Text variant="headingMd" as="p" fontWeight="semibold">
              Hello, {storeData?.name}.
            </Text>
            <Text variant="bodyMd" as="p">
              {`You are using ${storeData?.currency} currency!`}
            </Text>
          </>
        )}
      </AlphaCard>
    </>
  );
}
