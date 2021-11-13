import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {AssignmentSubmission} from "./assignment-submission";
import { Account } from "./account";

export interface Wage {
    docId?: string;
    instructor_account_doc_id: string;
    assignment_submission_doc_id: string;
    feedback_datetime?: Timestamp;
    seconds: number;
    school: string;
    // Manually created
    instructor?: Account;
    assignment_submission?: AssignmentSubmission;
    key?: string;
    school_abbreviation?: string;
    date_filter?: string;
    date?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
  }
