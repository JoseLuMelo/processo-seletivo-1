interface Student {
  id: number;
  ra: number;
  name: string;
  degreeId: number;
  classId: number;
}

interface Degree {
  degreeId: number;
  classes: { classId: number}[]
}

interface Teacher {
  id: number;
  teacherId: number;
  name: string;
  matterId: number;
  degrees: {
    degreeId: number;
    classes: {
      classId: number;
    }[];
  }[];
}

export type { Student, Degree, Teacher }