import React, { useEffect, useState } from "react";

import { Card, CircularProgress, Grid } from "@material-ui/core";

import ConsultationTable from "../components/ConsultationTable";
import SearchBox from "../components/SearchBox";
import { useGetConsultations } from "../hooks/useGetConsultations";
import { Consultation } from "../interfaces/Consultation";
import { ResponseDto } from "../interfaces/ResponseDto";

export const SAMPLE_DATA: ResponseDto<Consultation> = {
  message: "Success getting consultations",
  response: {
    total: 12844,
    start: 0,
    count: 100,
    elements: [
      {
        _id: "5d6ef57a91852b3fef00032f",
        state: "COMPLETED",
        doctor_id: "5119",
        id: "2i7PO8eNmb2",
        patient_id: "167995",
        conditionsTreated: [
          {
            businessLine: "FILI",
            required: false,
            requested: true,
          },
          {
            businessLine: "HYPE",
            required: false,
            requested: true,
          },
        ],
        isFollowup: true,
        numFollowup: 2,
        submittedDate: 1612365398,
        prescriptions: [
          {
            patientrxid: "66331686",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "0.05% tretinoin and 4% niacinamide compounded topical cream",
            directions: "Apply a pea-sized amount to the face at bedtime",
            drugid: "0",
            routepharmacyid: "0616586",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />ITC Compounding Pharmacy<br />(303) 663-4224",
            refills: "3",
            treatment_instruction_id: "tretinoin-formula",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 167995",
            compounded: true,
            rx_type: "TRETINOIN_FORMULA",
            dosage: "0.05%",
            prescriber_id: 5119,
          },
        ],
        completedDate: 1612369762,
        followupDate: 1619194942,
      },
      {
        _id: "5f9af7e0b2fb3e4ded269ab2",
        state: "COMPLETED",
        doctor_id: "5119",
        id: "2d0TdKsXLpw",
        patient_id: "232170",
        conditionsTreated: [
          {
            businessLine: "ACNE",
            required: false,
            requested: true,
          },
          {
            businessLine: "HYPE",
            required: false,
            requested: true,
          },
        ],
        isFollowup: true,
        numFollowup: 3,
        submittedDate: 1612368410,
        prescriptions: [
          {
            patientrxid: "66332468",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Tretinoin 0.05% + Niacinamide 4%",
            directions: "Apply a pea-sized amount to the face at bedtime",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "tretinoin-formula",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 232170",
            compounded: true,
            rx_type: "TRETINOIN_FORMULA",
            dosage: "0.05%",
            prescriber_id: 5119,
          },
          {
            patientrxid: "66332469",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "spironolactone 50 mg oral tablet",
            directions:
              "Take 1 tablet by mouth once a day. Do not get pregnant while taking this medication.",
            drugid: "20503",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "2",
            treatment_instruction_id: "3bZ1uleFFTM",
            status: "CURRENT",
            dispdetails: "30 Tablet",
            dispenseQuantity: "30.00000000",
            dispenseUnits: "Tablet",
            substitution: "ALLOWED",
            duration: "30",
            pharmacyNote: "Patient ID: 232170",
            druggenericid: "d00373",
            rx_type: "SPIRONOLACTONE",
            dosage: "50 mg",
            prescriber_id: 5119,
          },
        ],
        completedDate: 1612370044,
        followupDate: 1619195224,
      },
      {
        _id: "601ad053dd384b7879a17804",
        id: "2KXrikCLQRs",
        patient_id: "355930",
        state: "COMPLETED",
        conditionsTreated: [
          {
            businessLine: "FILI",
            required: false,
            requested: true,
          },
          {
            businessLine: "ROSE",
            required: false,
            requested: true,
          },
        ],
        doctor_id: "327193",
        submittedDate: 1612370256,
        prescriptions: [
          {
            patientrxid: "66342740",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Tretinoin 0.025% + Niacinamide 4%",
            directions:
              "Apply a pea-sized amount to the face at bedtime. Start 3x per week and increase as tolerated.",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "tretinoin-formula",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 355930",
            compounded: true,
            rx_type: "TRETINOIN_FORMULA",
            dosage: "0.025%",
            prescriber_id: 327193,
          },
          {
            patientrxid: "66342741",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Azelaic Acid 15% + Niacinamide 4%",
            directions: "Apply a thin layer to the face daily.",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "2peoDbRBys4",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 355930",
            compounded: true,
            rx_type: "AZELAIC_ACID_FORMULA",
            dosage: "15%",
            prescriber_id: 327193,
          },
        ],
        completedDate: 1612373934,
        followupDate: 1619199114,
      },
      {
        _id: "5fb2adc5b2fb3e36d86fe2d7",
        state: "COMPLETED",
        doctor_id: "5119",
        id: "4zaimN9vPua",
        patient_id: "324338",
        conditionsTreated: [
          {
            businessLine: "ACNE",
            required: false,
            requested: true,
          },
        ],
        isFollowup: true,
        numFollowup: 1,
        submittedDate: 1612365216,
        prescriptions: [
          {
            patientrxid: "66331560",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "spironolactone 50 mg oral tablet",
            directions: "Take 1 tablet by mouth twice daily.",
            drugid: "20503",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "2",
            treatment_instruction_id: "3bZ1uleFFTM",
            status: "CURRENT",
            dispdetails: "60 Tablet",
            dispenseQuantity: "60.00000000",
            dispenseUnits: "Tablet",
            substitution: "ALLOWED",
            duration: "30",
            pharmacyNote: "Patient ID: 324338",
            druggenericid: "d00373",
            rx_type: "SPIRONOLACTONE",
            dosage: "50 mg",
            prescriber_id: 5119,
          },
          {
            patientrxid: "66331561",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Tretinoin 0.025% + Clindamycin 1% + Niacinamide 4%",
            directions: "Apply a pea-sized amount to the face at bedtime",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "luDhAD3GbI",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 324338",
            compounded: true,
            rx_type: "TRETINOIN_CLINDAMYCIN_FORMULA",
            dosage: "0.025%-1%",
            prescriber_id: 5119,
          },
        ],
        completedDate: 1612369695,
        followupDate: 1619194875,
      },
      {
        _id: "601abf7be1ae70bdb6cfea5c",
        id: "1DLXwAmbN8S",
        patient_id: "355951",
        state: "COMPLETED",
        conditionsTreated: [
          {
            businessLine: "ACNE",
            required: false,
            requested: true,
          },
        ],
        doctor_id: "5119",
        submittedDate: 1612366143,
        prescriptions: [
          {
            patientrxid: "66331895",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "spironolactone 25 mg oral tablet",
            directions: "Take 3 tablets by mouth once a day (= 75 mg daily).",
            drugid: "20502",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "2",
            treatment_instruction_id: "3bZ1uleFFTM",
            status: "CURRENT",
            dispdetails: "90 Tablet",
            dispenseQuantity: "90.00000000",
            dispenseUnits: "Tablet",
            substitution: "ALLOWED",
            duration: "30",
            pharmacyNote: "Patient ID: 355951",
            druggenericid: "d00373",
            rx_type: "SPIRONOLACTONE",
            dosage: "25 mg",
            prescriber_id: 5119,
          },
          {
            patientrxid: "66331896",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Tretinoin 0.025% + Niacinamide 4%",
            directions: "Apply a pea-sized amount to the face at bedtime",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "tretinoin-formula",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 355951",
            compounded: true,
            rx_type: "TRETINOIN_FORMULA",
            dosage: "0.025%",
            prescriber_id: 5119,
          },
        ],
        completedDate: 1612369833,
        followupDate: 1619195013,
      },
      {
        _id: "5fbb192cb2fb3e1021ed3695",
        state: "COMPLETED",
        doctor_id: "5119",
        id: "uxRluzDXmq",
        patient_id: "250145",
        conditionsTreated: [
          {
            businessLine: "ACNE",
            required: false,
            requested: true,
          },
        ],
        isFollowup: true,
        numFollowup: 4,
        submittedDate: 1612366349,
        prescriptions: [
          {
            patientrxid: "66332170",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "spironolactone 100 mg oral tablet",
            directions:
              "Take 1 tablet by mouth once a day. Do not get pregnant while taking this medication.",
            drugid: "20959",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "2",
            treatment_instruction_id: "3bZ1uleFFTM",
            status: "CURRENT",
            dispdetails: "30 Tablet",
            dispenseQuantity: "30.00000000",
            dispenseUnits: "Tablet",
            substitution: "ALLOWED",
            duration: "30",
            pharmacyNote: "Patient ID: 250145",
            druggenericid: "d00373",
            rx_type: "SPIRONOLACTONE",
            dosage: "100 mg",
            prescriber_id: 5119,
          },
          {
            patientrxid: "66332171",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Tretinoin 0.018% + Niacinamide 4%",
            directions: "Apply a pea-sized amount to the face at bedtime",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "tretinoin-formula",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 250145",
            compounded: true,
            rx_type: "TRETINOIN_FORMULA",
            dosage: "0.018%",
            prescriber_id: 5119,
          },
        ],
        completedDate: 1612369919,
        followupDate: 1619195099,
      },
      {
        _id: "5fab2ae8b2fb3e04490a0439",
        state: "COMPLETED",
        doctor_id: "5119",
        id: "4eu0bBZ4a6C",
        patient_id: "302797",
        conditionsTreated: [
          {
            businessLine: "ACNE",
            required: false,
            requested: false,
          },
        ],
        isFollowup: true,
        numFollowup: 2,
        submittedDate: 1612370266,
        prescriptions: [
          {
            patientrxid: "66338374",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Tretinoin 0.025% + Niacinamide 4%",
            directions: "Apply a pea-sized amount to the face at bedtime",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "tretinoin-formula",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 302797",
            compounded: true,
            rx_type: "TRETINOIN_FORMULA",
            dosage: "0.025%",
            prescriber_id: 5119,
          },
          {
            patientrxid: "66338375",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "spironolactone 50 mg oral tablet",
            directions: "Take 1 tablet by mouth once daily.",
            drugid: "20503",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "2",
            treatment_instruction_id: "3bZ1uleFFTM",
            status: "CURRENT",
            dispdetails: "30 Tablet",
            dispenseQuantity: "30.00000000",
            dispenseUnits: "Tablet",
            substitution: "ALLOWED",
            duration: "30",
            pharmacyNote: "Patient ID: 302797",
            druggenericid: "d00373",
            rx_type: "SPIRONOLACTONE",
            dosage: "50 mg",
            prescriber_id: 5119,
          },
        ],
        completedDate: 1612372077,
        followupDate: 1619197257,
      },
      {
        _id: "5dfe103d91852b4e1e000071",
        state: "COMPLETED",
        doctor_id: "327193",
        id: "1qC657atKqm",
        patient_id: "136147",
        conditionsTreated: [
          {
            businessLine: "HAIR",
            required: false,
            requested: true,
          },
        ],
        isFollowup: true,
        numFollowup: 4,
        submittedDate: 1612368014,
        prescriptions: [
          {
            patientrxid: "66342357",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "finasteride 1 mg oral tablet",
            directions: "Take one tablet daily.",
            drugid: "18336",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "4dRKAzGJbbk",
            status: "CURRENT",
            dispdetails: "90 Tablet",
            dispenseQuantity: "90.00000000",
            dispenseUnits: "Tablet",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 136147",
            druggenericid: "d00563",
            rx_type: "FINASTERIDE",
            dosage: "1 mg",
            prescriber_id: 327193,
          },
        ],
        completedDate: 1612373606,
        followupDate: 1643045186,
      },
      {
        _id: "5fabff9db2fb3e240e6d3678",
        state: "COMPLETED",
        doctor_id: "5119",
        id: "w1C5gRHFVQ",
        patient_id: "321802",
        conditionsTreated: [
          {
            businessLine: "ACNE",
            required: false,
            requested: true,
          },
        ],
        isFollowup: true,
        numFollowup: 1,
        submittedDate: 1612370490,
        prescriptions: [
          {
            patientrxid: "66338768",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Tretinoin 0.025% + Niacinamide 4%",
            directions: "Apply a pea-sized amount to the face at bedtime",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "tretinoin-formula",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 321802",
            compounded: true,
            rx_type: "TRETINOIN_FORMULA",
            dosage: "0.025%",
            prescriber_id: 5119,
          },
          {
            patientrxid: "66338769",
            rxdate: "2021-02-03T06:00:00.000Z",
            drug: "Metronidazole 1% + Niacinamide 4%",
            directions: "Apply to the face once daily",
            drugid: "0",
            routepharmacyid: "0363248",
            routedetails:
              "<strong>Prescription sent on Feb 3, 2021</strong><br />Apostrophe Pharmacy- Gilbert AZ<br />(844) 333-6693",
            refills: "3",
            treatment_instruction_id: "1SUPrycQq1Y",
            status: "CURRENT",
            dispdetails: "21 Gram",
            dispenseQuantity: "21.00000000",
            dispenseUnits: "Gram",
            substitution: "ALLOWED",
            duration: "90",
            pharmacyNote: "Patient ID: 321802",
            compounded: true,
            rx_type: "METRONIDAZOLE_FORMULA",
            dosage: "1%",
            prescriber_id: 5119,
          },
        ],
        completedDate: 1612372234,
        followupDate: 1619197414,
      },
    ],
  },
  error: "",
};
const ConsultationListPage: React.FC<{}> = () => {
  const [search, setSearch] = useState<string>("");
  const [consultationResponse, setConsultationResponse] = useState<
    ResponseDto<Consultation>
  >();
  // TODO use response data
  const [consultations, setConsultations] = useState<Consultation[]>(
    SAMPLE_DATA.response.elements
  );
  const [filteredConsultations, setFilteredConsultations] = useState<
    Consultation[]
  >([]);
  // TODO get data from endpoint
  // const {
  //   consultationResponse: loadedResponse,
  //   isLoading,
  //   isError,
  // } = useGetConsultations(true);

  // useEffect(() => {
  //   if (!isLoading && loadedResponse) {
  //     setConsultationResponse(loadedResponse);
  //     if (
  //       loadedResponse.elements &&
  //       loadedResponse.elements.length > 0
  //     ) {
  //       setConsultations(loadedResponse.response.elements);
  //     }
  //   }
  // }, [isLoading, loadedResponse]);

  useEffect(() => {
    if (search) {
      // TODO use response data
      const filteredResults = SAMPLE_DATA.response.elements.filter(
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
        {/* TODO uncomment when endpoint available */}
        {/* {isLoading && (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )} */}
        {/* {!isLoading && (consultations || filteredConsultations) && ( */}
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
        {/* )} */}
      </Grid>
    </Grid>
  );
};

export default ConsultationListPage;
