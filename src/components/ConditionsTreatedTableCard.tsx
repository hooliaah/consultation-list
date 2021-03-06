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
import CheckIcon from "@material-ui/icons/Check";

import { ConditionsTreated } from "../interfaces/ConditionsTreated";
import { Consultation } from "../interfaces/Consultation";

const ConditionsTreatedTableCard: React.FC<{ consultation: Consultation }> = ({
  consultation,
}) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h6'>Conditions Treated</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Business Line</TableCell>
                    <TableCell>Required</TableCell>
                    <TableCell>Requested</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {consultation.conditionsTreated.map(
                    (conditionsTreated: ConditionsTreated, index) => (
                      <TableRow key={index}>
                        <TableCell>{conditionsTreated.businessLine}</TableCell>
                        <TableCell>
                          {conditionsTreated.required ? <CheckIcon /> : ""}
                        </TableCell>
                        <TableCell>
                          {conditionsTreated.requested ? <CheckIcon /> : ""}
                        </TableCell>
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

export default ConditionsTreatedTableCard;
