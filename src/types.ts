interface Student {
  id: number;
  ra: number;
  name: string;
  degreeId: number;
  classId: number;
}

interface Degree {
  id: number;
  name: string;
}

export type { Student }