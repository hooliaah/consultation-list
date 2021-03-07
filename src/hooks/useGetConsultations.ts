import axios from "axios";
import { useEffect, useState } from "react";

import { Consultation } from "../interfaces/Consultation";
import { ResponseDto } from "../interfaces/ResponseDto";

export function useGetConsultations(shouldFetchOnMount = false) {
  const PATH =
    "https://2revjapjwd.execute-api.us-west-1.amazonaws.com/dev/consultations";
  const [data, setData] = useState<ResponseDto<Consultation>>();
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
