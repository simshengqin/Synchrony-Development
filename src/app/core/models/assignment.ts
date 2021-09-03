export interface Assignment {
  docId?: string;
  instructor_account_doc_id?: string;
  created_datetime?: string;
  description?: string;
  due_datetime?: string;
  name?: string;
  school?: Array<string>;
  school_instrument_level?: Array<string>;
  instructor_assignment_brief_attachment?: string;
  instructor_assignment_brief_attachment_name?: string;
  status?: AssignmentStatus;


  // Not in database, manually created
  // assignmentSubmission?: AssignmentSubmission;
  // student?: Student;
  // instructor?: Instructor;
  // instructor_name?: string;
  // assignmentCompletionStatus?: string;
  // assignmentSubmissionStatus?: string;
}

export enum AssignmentStatus {
  pending =  'pending',
  submitted = 'submitted',
  late = 'late'
}
