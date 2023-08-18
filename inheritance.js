// SINGLE LEVEL
class Parent {
    constructor(mothername) {
        this.parentname = mothername;
    }
    details() {
        console.log(`Hello I am the mother, my name is ${this.parentname}`);
    }
}

class Child extends Parent {
    constructor(mothername,childname){
        super(mothername);
        this.child=childname;
    }
    show(){
        console.log(`Hello I am the child and my name is ${this.child}`);
        this.details();
    }
}

let firstChild = new Child("Mummy","baby");
firstChild.show();
console.log();

// MULTILEVEL
console.log("Multilevel Inheritance");
class GrandChild extends Child {
    constructor(mothername,childname,grandname){
        super(mothername,childname);
        this.grand = grandname;
    }
    display() {
        console.log(`Hello I am the grandchild and my name is ${this.grand}`);
        this.show();
    }
}
let firstGrand = new GrandChild("MOM","BABY","INFANT");
firstGrand.display();
console.log();

//MULTIPLE 
// console.log("Multiple Inheritance");
// class Sibling extends Parent Child {
//     constructor(mothername,sibname){
//         super(mothername);
//         this.sibname = sibname;
//     }
//     disdetails() {
//         console.log(`Hello I am the sibling and my name is ${this.sibname}`);
//         this.details();
//     }
// }
// let firstSib = new Sibling("Mummy","brother");
// firstSib.disdetails();