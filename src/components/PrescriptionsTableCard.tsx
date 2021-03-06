import React from "react";

import {
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import { Consultation } from "../interfaces/Consultation";
import { Prescription } from "../interfaces/Prescription";

const PrescriptionsTableCard: React.FC<{
  consultation: Consultation;
}> = ({ consultation }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h6'>Prescriptions</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Drug</TableCell>
                    <TableCell>Dispense Quantity</TableCell>
                    <TableCell>Dispense Units</TableCell>
                    <TableCell>Dosage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {consultation.prescriptions.map(
                    (prescription: Prescription) => (
                      <TableRow key={prescription.patientrxid}>
                        <TableCell>{prescription.drug}</TableCell>
                        <TableCell>{prescription.dispenseQuantity}</TableCell>
                        <TableCell>{prescription.dispenseUnits}</TableCell>
                        <TableCell>{prescription.dosage}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PrescriptionsTableCard;
