alert('I am not a robot')
class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
}
let Lafacesus;
document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Hello World";
    const firstName = document.getElementById("firstName").value;
    Lafacesus = new Person(firstName,lastName,age)
  });