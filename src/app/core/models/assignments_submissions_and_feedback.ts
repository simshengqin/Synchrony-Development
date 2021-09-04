import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface AssignmentsSubmissionsAndFeedback {
  docId?: string;
  assignment_doc_id?: string;
  instructor_doc_id?: string;
  student_doc_id?: string;
  school?: string;
  school_instrument_level?: string;
  submitted_datetime?: Timestamp;
  student_attachment_scoresheet?: string;
  student_attachment_scoresheet_name?: string;
  student_attachment_recording?: string;
  student_attachment_recording_name?: string;
  feedback?: string;
  instructor_feedback_attachment_name?: string,
  instructor_feedback_attachment?: string;
  feedback_datetime?: Timestamp;
  grade?: number;
  // Not in database, manually created
  student?: Account;
  instructor?: Account;
}
export enum Role {
  admin = 'admin',
  student = 'student',
  instructor = 'instructor'
  // freelancer = 'freelancer'
}

