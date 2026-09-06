const courses = ["bread", "milk", "rice", "coffee"];



courses.push('sugar');

console.log(courses);

const updatedCourses = courses.filter(item =>item !=="milk");
console.log(updatedCourses);

for (let i = 1 ;i<=4 ; i++) {
console.log(i + " " + courses[i]);


}

for (let i = 1 ;i<=4 ; i++) {
if ( courses[i] ==="coffee") {
    console.log(courses[i] + " " + "is in the list ");
}


}