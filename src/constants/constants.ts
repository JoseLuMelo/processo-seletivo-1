import classesJson from './Teste-Front-End/classes.json'
import degreesJson from './Teste-Front-End/degrees.json'
import mattersJson from './Teste-Front-End/matters.json'
import relationshipsJson from './Teste-Front-End/relationships.json'
import studentsJson from './Teste-Front-End/students.json'
import teachersJson from './Teste-Front-End/teachers.json'

const classesData: string[] = classesJson.classes.map(c => c.name)
const degreesData: {id: number, name: string}[] = degreesJson
const mattersData: string[] = mattersJson.map(m => m.name)
// const relationships = relationshipsJson
const studentsData = studentsJson;
const teachersData: {id: number, name: string}[] = teachersJson

export { classesData, degreesData, mattersData, studentsData, teachersData }