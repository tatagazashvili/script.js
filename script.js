//1
let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"];

    for (let i = 1; i < cars.length; i++) {

    console.log (cars [i]);
}

//2
 let names = ["tamata", "luka", "ia", "mariami", "nini"];
    
    for (let i = 0; i < names.length; i++) {
        if ( names[i].length > 3) {
            console.log ( names [i]);
        }
    }

//3
 let numbers = [ 4, 3, 22, 10, 14, 7];
     for (let i = 0; i <numbers.length; i++) {
        if ( numbers [i] % 2 == 0){
        console.log ( numbers[i]);
        }
     }
let numbers = [ 4, 3, 22, 10, 14, 7];
     for (let i = 0; i <numbers.length; i++) {
        if ( numbers [i] % 2 == 1){
        console.log ( numbers[i]);
        }
     }

//4
let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"];
    let newArray = cars.slice (1);
         console.log= (cars[1]);

//5
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
  Console.log (person.eyecolor);    

//6
let numbers = [9, 11, 44, 13, 23];
    for (let i = 0; i < numbers.length; i++) {
     console.log(numbers[i]);
    }

//7
let numbers = [5, 25, 89, 120, 36];
    numbers.unshift("html", "css");
    numbers.push("javascript","python");
    console.log(numbers);
    numbers.shift();
    numbers.pop();

//9
let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bentley"];
    for (let i = 2; i < 6 ; i++) {
    console.log (cars [i]);
    }

   list newArray = cars.slice(1,5,6,7);
   console.log(newArray);

   


  
