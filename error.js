try {
    // code that might failgoes here
    let result = 10/0;
    console.log(result);
    undefinedFunction(); //this will cause an error
        console.log("this line will not run");
} catch (error){
    // this runs only if something goes wrong
    console.log("an error occured: " + error.message + error.name);
}
console.log("the program continues here.");

function loadUserData(userId) {
    console.log("starting to load data...");
    try {
        if (userId <= 0) {
            throw new Error("user ID must be greater than 0");
        }
        console.log("Data loaded for user: " + userId);
    } catch(error) {
        console.log("failed: " + error.message);
    } finally {
        console.log("loading complete. Closing connection."); // ALWAYS runs
    }
}

//loadUserId(5)
loadUserData(-1)

function registerStudent(name, age){
    try{
        if (!name) {
            throw new Error("Name cannot be empty!");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        } 
            console.log("student registered: " + name, + ", Age: " + age);
        } catch (error){
            console.log("Registration failed: " + error.message);
    }
}

//registerStudent("Bola Okafor", 22); // Student registered: Bola Okafor, Age: 22
//registerStudent("", 22);
registerStudent("kemi", 12)
//trim()=== "")|| name