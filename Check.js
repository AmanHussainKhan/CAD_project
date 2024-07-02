// what is Object ?

// let Obj={
//     name:"Kumar",
//     gender:"male",
//     age:25
// }
// console.log(Obj);

// why we need classes ?

// What is Class in Js ?

class Person{
    constructor(name,gender,age){
    this.name=name;
    this.gender=gender;
    this.age=age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    
      birthday() {
        this.age++;
        console.log(`Happy birthday! Now I am ${this.age} years old.`);
      }
    
}

const personA= new Person("salman","male",23);
const personB= new Person("SRK","male",25);

// console.log(personA);
// personB.greet();


// What is a Constructor ?

// Constructor is a special method that gets called automatically
// when you create a new instance (object) of that class.

//  It's used to initialize the object's state and set up any 
//  initial values for its properties.

// Automatic Invocation: When you create a new object from a class using the new keyword, the constructor is automatically called.

// Accessing Properties: Inside the constructor, you can access the object's properties using the this keyword. This allows you to set initial values based on parameters passed to the constructor or predefined values.

class newClass{
    constructor(name,job){
       this.name=name;
       this.job=job;
    }

    startJob(){
        console.log("from monday");
    }
    stopJob(){
        console.log("not quitting soon");
    }
    setJob(title){
        this.titleOfJob=title;
    }
    getJob(){
        return this.titleOfJob;
    }
}

const aObject=new newClass("aman","ReactJS Trainee")
aObject.setJob("ReactJS Trainee");
console.log(aObject.getJob());
// console.log(aObject);






