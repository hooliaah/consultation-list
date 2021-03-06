import { useState, useEffect } from "react";
import axios from "axios";

export function useGetConsultations(shouldFetchOnMount = false) {
  const PATH =
    "https://5otl9gewlh.execute-api.us-west-1.amazonaws.com/dev/consultations/";
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axios(PATH);
      setData(response.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (shouldFetchOnMount) fetchData();
  }, [shouldFetchOnMount]);

  return {
    consultationResponse: data,
    isLoading,
    isError,
    getConsultations: fetchData,
  };
}
