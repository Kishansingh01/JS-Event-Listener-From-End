
//A javascript object is an entity having state and behaviour(properties and methods)
//In javascript objects have a special property called prototype 
//The prototype property is a reference to an object that is the prototype of a given object.
//In javaScript array is an object.
//If object and prototype have same method,Object methods will be used.


// const student={
//     fullName:"Kishan Kumar",
//     marks:90,
//     printMarks:function(){
//         console.log("marks=",this.marks);//This.marks means i am talking about students.marks

//     },
// };




const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
    // calctax2 :function(){   We can write function like that also
    //     console.log("Tax rate is 10%");
    // },
};
const karanArjun={
    salary:50000,
    calcTax(){
        console.log("tax rate is 20%")
    }
};
// karanArjun.calcTax();  //We can call function like that also

const karanArjun1={
    salary:60000,
};

const karanArjun2={
    salary:65000,
};

karanArjun.__proto__=employee;//i wanted to use karanArjun as an employee
//karanArjun.__proto__=employee;  //This is called prototype chaining

karanArjun1.__proto__=employee;
karanArjun2.__proto__=employee;
karanArjun.calcTax//In karanArjun it will print tax rate is 20%.
///If object and prototype have same method,Object methods will be used.


