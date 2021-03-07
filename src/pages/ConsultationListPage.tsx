import React, { useEffect, useState } from "react";

import { Card, CircularProgress, Grid, Typography } from "@material-ui/core";

import ConsultationTable from "../components/ConsultationTable";
import SearchBox from "../components/SearchBox";
import { useGetConsultations } from "../hooks/useGetConsultations";
import { Consultation } from "../interfaces/Consultation";
import { ResponseDto } from "../interfaces/ResponseDto";

const ConsultationListPage: React.FC<{}> = () => {
  const [search, setSearch] = useState<string>("");
  const [consultationResponse, setConsultationResponse] = useState<
    ResponseDto<Consultation>
  >({} as ResponseDto<Consultation>);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [filteredConsultations, setFilteredConsultations] = useState<
    Consultation[]
  >([]);
  const {
    consultationResponse: loadedResponse,
    isLoading,
    isError,
  } = useGetConsultations(true);

  useEffect(() => {
    if (!isLoading && loadedResponse) {
      setConsultationResponse(loadedResponse);
      if (
        loadedResponse.response.elements &&
        loadedResponse.response.elements.length > 0
      ) {
        setConsultations(loadedResponse.response.elements);
      }
    }
  }, [isLoading, loadedResponse]);

  useEffect(() => {
    if (search && consultations) {
      const filteredResults = consultations.filter(
        (consultation: Consultation) =>
          consultation.id === search ||
          consultation.doctor_id === search ||
          consultation.patient_id === search ||
          consultation.conditionsTreated.some(
            (ct) => ct.businessLine === search
          )
      );
      setFilteredConsultations(filteredResults);
    }
    if (search.length < 1) {
      setConsultations(consultations);
    }
  }, [search, consultations]);

  return (
    <Grid
      container
      spacing={3}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Grid item xs={12}>
        <h1>Consultations</h1>
      </Grid>
      <Grid
        container
        spacing={3}
        direction='column'
        justify='center'
        alignItems='center'
      >
        {isLoading && (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
        {isError && (
          <Typography variant='h5'>
            There was an error loading consultations.{" "}
            {loadedResponse && consultationResponse.error
              ? consultationResponse.error
              : `Please check your internet
            connection and try again.`}
          </Typography>
        )}
        {!isLoading && !isError && (consultations || filteredConsultations) && (
          <>
            <Grid item xs={12}>
              <SearchBox
                value={search}
                onSearch={(value: string) => setSearch(value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Card>
                <ConsultationTable
                  consultations={
                    search.length > 1 ? filteredConsultations : consultations
                  }
                />
              </Card>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ConsultationListPage;
