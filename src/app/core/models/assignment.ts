export interface Assignment {
  docId?: String;
  instructor_account_doc_id: String;
  created_datetime: Date;
  description: String;
  due_datetime: Date;
  name: String;
  school: Array<String>;
  school_instrument_level: Array<String>;
  file_names: Array<String>
}
