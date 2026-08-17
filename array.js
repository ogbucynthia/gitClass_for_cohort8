let students = ["Sara", "Samad", "Godwin", "Mohh"]
console.log(students[0])
console.log(students.length)
students[3] = "Effiong"
console.log(students)

//adding elements to an array
students.push("Mohh") //adds items to the end of the array 
console.log(students)

students.unshift("Uzoma") //adds items to the beginning of the array 
console.log(students)

//removing elememts
students.pop() //removes the last item in the array
console.log("this is the array after popping:", students)
students.shift() //removes the first item in the array
console.log("this is the array after shifting:", students)

//includes , indexOf
console.log(students.includes("Sara"))
console.log(students.indexOf("Sara"))


//reverse , sort , slice , splice
students.reverse()
console.log(…