// //Constructor:Automatically invoked by new 




// If child and parents have same method, then child method will be used 
// this method is called overriding.


// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("Creating new objects");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName=brand;
//     }

// }

// let fortuner=new ToyotaCar("fortuner",10);//constructor invoke
// console.log(fortuner);
// //fortuner.setBrand("fortuner");
// let lexus=new ToyotaCar("lexus",12);//constructor,i have taken the class of Toyota car so,its all properties will be belongs there.
// console.log(lexus);
// //lexus.setBrand("lexus",12);



//  Inheritance in JS 

// Inheritance is passing down properties and methods from 
// parent class to child class.


// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class Child extends Parent{}
// let obj=new Child();//These are working like an inheritance
//In child class and parent class function are same then chuld class will invoke.

class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do nothing");
    }
}

class Engineer extends Person{//Here i have herit 
    work(){
        console.log("solve problems,Build problems");
    }
}
class Doctor extends Person(){
    work(){
        console.log("Treat patients");
    }
}

let shradhaObj=new Engineer();
let ShradhaObj=new Person();


