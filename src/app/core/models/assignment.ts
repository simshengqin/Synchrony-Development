import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {AssignmentSubmission} from "./assignment-submission";

export interface Assignment {
  docId?: string;
  instructor_account_doc_id: string;
  created_datetime: Timestamp;
  description: string;
  due_datetime: Timestamp;
  name: string;
  school: Array<string>;
  school_instrument_level: Array<string>;
  file_names: Array<string>;

  // Not in database, manually created
  assignment_name?: string; // same as name, created for table component
  instructor?: Account;
  submission_status?: string;
  isOverDueDate?: boolean;
  assignmentSubmission?: AssignmentSubmission;
}
