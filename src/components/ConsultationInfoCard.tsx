import { format } from "date-fns";
import * as React from "react";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";

import { Consultation } from "../interfaces/Consultation";

const ConsultationInfoCard: React.FC<{ consultation: Consultation }> = ({
  consultation,
}) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h6'>Consultation Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>ID: {consultation.id}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>State: {consultation.state}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              Patient ID: {consultation.patient_id}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='body1'>
              Completed Date:{" "}
              {format(
                new Date(consultation.completedDate * 1000),
                "MMM d, yyyy"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='body1'>
              Follow-up Date:{" "}
              {format(
                new Date(consultation.followupDate * 1000),
                "MMM d, yyyy"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='body1'>
              Submitted Date:{" "}
              {format(
                new Date(consultation.submittedDate * 1000),
                "MMM d, yyyy"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1'>
              Is this a follow-up visit?:{" "}
              {consultation.isFollowup?.toString() ?? "n/a"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1'>
              Number Follow-up visit:{" "}
              {consultation.numFollowup?.toString() ?? "n/a"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ConsultationInfoCard;
