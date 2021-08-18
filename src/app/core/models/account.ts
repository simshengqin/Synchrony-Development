export interface Account {
  doc_id?: string;
  username?: string;
  password?: string;
  first_name?: string;
  last_name ?: string;
  school?:string[];
  schoolgroup?:string[];
  role?: Role;
}
export enum Role {
  admin = 'admin',
  student = 'student',
  instructor = 'instructor',
  freelancer = 'freelancer'
}

