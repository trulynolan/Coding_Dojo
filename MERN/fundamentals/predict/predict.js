// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.



// 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Two random cars will be logged. 
console.log(randomCar)
console.log(otherRandomCar)

// 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Nothing, calling a var that doesn't exist in the function. 
console.log(name);
console.log(otherName);

// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Well the password wasn't hashed, so it'll still say 12345. Hashedpassword will have an error.
console.log(password);
console.log(hashedPassword);

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//In my head this has a ton of errors. I ran it and it says false and true.
console.log(first == second);
console.log(first == third);

// 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Will need clarity on this as well.
console.log(key); //value
console.log(secondKey); // [1,5,1,8,3,3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5


