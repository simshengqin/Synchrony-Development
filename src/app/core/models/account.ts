export interface Account {
  docId?: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  school: string[];
  school_instrument_level: string[];
  role: Role;
  first_login: boolean;
}
export enum Role {
  admin = 'admin',
  student = 'student',
  instructor = 'instructor'
  // freelancer = 'freelancer'
}

