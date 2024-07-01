// You are creating a website for your college.Create a class user with 2 
// properties,name and Email.It also has a method called viewData()
// that allows user to view Data. 


// Create a new class called Admin which inherits from UserActivation.  Add 
// a new method called editData to Admin that allows it to edit website Data . 

let DATA='secret information';
class User{

     constructor(name,email){
        this.name=name;
        this.email=email;
     }
     viewData(){
        console.log("data= ", DATA);
     }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";
    }
}

let student1=new User("shradha","abc@email.com");
let student2=new User("Kishan","kishan@email.com");

let teacher1=new User("Zabii Sir","Kishan@01010056");

let admin1=new Admin("admin","admin@college.com");

// student1=> It will print student1 whole details.
// student2=> It will print sudent2 whole details.
//teacher1=>It will print teacher1 whole details.
//student1.viewData() It will show data
//teacher1.viewData()=>It will show data
//admin// It will tell admins whole details
//DATA  it will print secret va;ue
