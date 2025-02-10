// Creating an array of Numbers
let numbers = [1, 2, 3, 4, 5];

// Accessing elements in an array
console.log("First element :", numbers[0]); // Output: 1
console.log("Second element :", numbers[1]); // Output: 2

// Adding elements to an array
numbers.push(6); // Adds 6 to the end of the array
console.log("Updated array :", numbers); // Output: [1, 2, 3, 4, 5, 6]

// Removing elements from an array
numbers.pop(); // Removes the last element (6) from the array
console.log("Updated array :", numbers); // Output: [1, 2, 3, 4, 5]

// Creating an object representing a person
let person = {
    name: "Kirti Singh",
    age: 25,
    isStudent: false,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing properties of an object
console.log("Name of the person:", person.name); // Output: Kirti Singh
console.log("Age:", person.age); // Output: 25

// Invoking methods of an object
person.greet(); // Output: Hello, my name is Kirti Singh
