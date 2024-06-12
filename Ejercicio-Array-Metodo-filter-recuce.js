//  Crea un programa con calificaciones sacar promedio de notas aprovatorias; aprovatorias + 70

const grades = [85, 65, 92, 78, 95, 66, 50,89,100];
const passingGrades = grades.filter(grade => grade >= 70)
const averagePassingGrades = passingGrades.reduce((sum, grade)=> sum +grade, 0)/passingGrades.length

console.log( 'Original Grades:', grades);
console.log('Passing Grades:', passingGrades);
console.log('average passing Grades:', averagePassingGrades);