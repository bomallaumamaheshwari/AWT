class human{
    constructor(){
        this.age=20;
    }
printAge(){
    console.log(this.age)
}
}
class person extends human{
    constructor(){
        super();
        this.name="UMA"
    }
    printName(){
        console.log(this.name)
    }
}
const persons=new person();
persons.printName();
persons.printAge();