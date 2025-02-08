//

let num = 0;

if(num >0){
    console.log(num + " is a positive number");
}
else if(num < 0){
    console.log(num + " is a negative number");
}
else{
    console.log(num + " is zero");
}
//Using a for loop to iterate From 1 to 5 
for (let i = 1; i <= 5; i++) {
    console.log("Iteration :" , i);
}

//Using a While Loop to iterate until a condition is false

let count = 0;
while(count <= 5){
    console.log("Count:" , count);
    count++;
}