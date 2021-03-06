import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Grid } from "@material-ui/core";

import ConditionsTreatedTableCard from "../components/ConditionsTreatedTableCard";
import ConsultationInfoCard from "../components/ConsultationInfoCard";
import PrescriptionsTableCard from "../components/PrescriptionsTableCard";
import { Consultation } from "../interfaces/Consultation";

const ConsultationDetailPage: React.FC<RouteComponentProps> = ({
  location,
}) => {
  const consultation = location.state as Consultation;

  return (
    <Grid container spacing={3}>
      <Grid container item xs={12}>
        <h1>Consultation Information</h1>
      </Grid>
      <Grid item xs={12}>
        <ConsultationInfoCard consultation={consultation} />
      </Grid>
      <Grid item xs={12}>
        <PrescriptionsTableCard consultation={consultation} />
      </Grid>
      <Grid item xs={12}>
        <ConditionsTreatedTableCard consultation={consultation} />
      </Grid>
    </Grid>
  );
};

export default ConsultationDetailPage;
