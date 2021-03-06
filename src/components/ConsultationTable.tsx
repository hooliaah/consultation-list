import { format } from "date-fns";
import React from "react";
import { useHistory } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { Consultation } from "../interfaces/Consultation";
import { ResponseDto } from "../interfaces/ResponseDto";

const ConsultationTable: React.FC<{
  consultations: ResponseDto<Consultation>;
}> = ({ consultations }) => {
  const history = useHistory();
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Patient ID</TableCell>
            <TableCell>Doctor ID</TableCell>
            <TableCell>Completed Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consultations.response.elements.map((consultation: Consultation) => (
            <TableRow
              hover
              key={consultation.id}
              onClick={() => history.push(`/${consultation.id}`, consultation)}
            >
              <TableCell>{consultation.id}</TableCell>
              <TableCell>{consultation.state}</TableCell>
              <TableCell>{consultation.patient_id}</TableCell>
              <TableCell>{consultation.doctor_id}</TableCell>
              <TableCell>
                {format(
                  new Date(consultation.completedDate * 1000),
                  "MMM d, yyyy"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConsultationTable;
