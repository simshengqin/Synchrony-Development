export class Classes{

  // Example:
  // Drums, Trumpets, Trombone, Flute, Violin
  instrument_name: String;
  // Example:
  // P1, P2, P3, P4, P5, P6
  levels: String[]

  constructor(instrument_name:String, levels:String[]){
    this.instrument_name = instrument_name;
    this.levels = levels;
  }
}

export class School {

  // Examples:
  // SJII, ACS, CHIJ
  school_name: String;
  classes : Classes[];

  constructor(school_name:String, classes:Classes[]){
    this.school_name = school_name;
    this.classes = classes;
  }

  getSchoolName(){
    return this.school_name;
  }
}


