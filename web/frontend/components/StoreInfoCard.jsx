import { Text, AlphaCard, Spinner, VerticalStack } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import useStoreData from "../hooks/useStoreData.js";

export function StoreInfoCard() {
  const { storeData, isLoadingStoreData, isError, setIsError } = useStoreData();

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
          <VerticalStack gap="4">
            <Text variant="headingMd" as="p" fontWeight="semibold">
              Hello, {storeData?.name}.
            </Text>
            <Text variant="bodyMd" as="p">
              {`You are using ${storeData?.currency} currency!`}
            </Text>
          </VerticalStack>
        )}
      </AlphaCard>
    </>
  );
}
