//If child and parents have same method, then child method will be used 
// this method is called overriding.


// Super Keyword:- The super keyword is used to call the 
// constructor of its parent class to access the parent's properties 
// and method



// Below examples once u take a look i am not sure at this example
// class Person{
//     constructor(){
//        this.species="homo sapiens"; 
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("Do nothing");
//     }
// }

// class Engineer extends Person{//Here i have herit 
//     work(){
//         console.log("solve problems,Build problems");
//     }
// }
// class Doctor extends Person(){
//     work(){
//         console.log("Treat patients");
//     }
// }

// let shradhaObj=new Engineer();
// let ShradhaObj=new Person();
// let p1=new person();





// Super Keyword:- The super keyword is used to call the 
// constructor of its parent class to access the parent's properties 
// and method.


// class Person{
//         constructor(){
//             console.log("Enter parents constructor");
//            this.species="homo sapiens"; 
//         }
//         eat(){
//             console.log("eat");
//         }
//     }
//     class Engineer extends Person{//Here i have herit 
//        constructor(branch){
//         console.log("Enter child constructor");
//         super();//To invoke parents class constructor
//         this.branch=branch;
//         console.log("Exit child constructor");

//        }
//         work(){
//             console.log("solve problems,Build problems");
//         }
//     }
//     let EngObj=new Engineer("chemical Engg");





class Person{
    constructor(name){
       this.species="homo sapiens"; 
       this.name=name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{//Here i have herit 
   constructor(name){
    super();//To invoke parents class constructor

   }
    work(){
        super.eat();//This calls parents eat 
        console.log("solve problems,Build problems");
    }
}
let EngObj=new Engineer("Kishan");
EngObj.work();//eat then work
    
