import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {AssignmentSubmission} from "./assignment-submission";

export interface Wage {
    docId?: string;
    instructor_account_doc_id: string;
    assignment_submission_doc_id: string;
    feedback_datetime?: Timestamp;
    seconds: number;
    // Manually created
    instructor?: Account;
    assignment_submission?: AssignmentSubmission;
  }
