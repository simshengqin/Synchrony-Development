export interface Account {
  docId?: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  school: string[];
  school_instrument_level: string[];
  role: Role;
  first_login?: boolean;
  is_delete?: boolean;
  login_fail_count?: number;
}
export enum Role {
  admin = 'admin',
  student = 'student',
  instructor = 'instructor',
  invalid = ''
}

