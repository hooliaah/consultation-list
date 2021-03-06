import { ConditionsTreated } from "./ConditionsTreated";
import { Prescription } from "./Prescription";

export interface Consultation {
  _id: string;
  id: string;
  state: string;
  doctor_id: string;
  patient_id: string;
  submittedDate: number; // unix timestamp
  completedDate: number; // unix timestamp
  followupDate: number; // unix timestamp
  conditionsTreated: ConditionsTreated[];
  prescriptions: Prescription[];
  isFollowup?: boolean;
  numFollowup?: number;
}
