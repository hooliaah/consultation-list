export interface Prescription {
  patientrxid: string;
  rxdate: string;
  drug: string;
  directions: string;
  drugid: string;
  routepharmacyid: string;
  routedetails: string;
  refills: string;
  treatment_instruction_id: string;
  status: string;
  dispdetails: string;
  dispenseQuantity: string;
  dispenseUnits: string;
  substitution: string;
  duration: string;
  pharmacyNote: string;
  rx_type: string;
  dosage: string;
  prescriber_id: number;
  compounded?: boolean;
  druggenericid?: string;
}
