import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {Account} from './account';
import {Assignment} from './assignment';

export interface AssignmentSubmission {
  docId?: string;
  assignment_doc_id?: string;
  instructor_doc_id?: string;
  student_doc_id?: string;
  school?: Array<string>;
  school_instrument_level?: Array<string>;
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
  assignment?: Assignment;
  assignment_name?: string;
  student?: Account;
  student_name?: string;
  submission_status?: string;
  feedback_status?: string;
  instructor?: Account;


}
export enum Role {
  admin = 'admin',
  student = 'student',
  instructor = 'instructor'
  // freelancer = 'freelancer'
}

