import { useAppQuery } from "./useAppQuery.js";
import { useState } from "react";

const UseStoreData = () => {
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

  return {
    storeData: data?.data?.[0],
    isLoadingStoreData,
    isError,
    setIsError,
  };
};

export default UseStoreData;
