class Hamster{
  constructor (name){
    this.owner="";
    this.name="name";
    this.price=15;
  }
    wheelRun(){
      console.log("squeak squeak");
    }
    eatFood() {
      console.log("nibble nibble");
    }
    getPrice() {
      return this.price;
  
    }
}
class Person{
  constructor(name){
    this.name= name;
    this.age=0;
    this.height=0;
    this.weight=0;
    this.mood=0;
    this.hampsters=[]
    this.bankaccount=0;
  }
getName(){
  return this.name;
}
getAge(){
  return this.age;
}
getWeight() {
  return this.weight;
}
greet(){
    //why is this not correct?
  console.log("hello, my name is" this.name);
}
eat() {
  this.weight ++;
  this.mood ++;
}
exercise(){

  this.weight --;
}
ageUp(){
  this.age ++;
  this.height++;
  this.weight ++;
  this.mood --;
  this.bankaccount + 10;
}

buyHampsters (Hamster) {
  this.hamsters push (Hamster);
  this.mood +10;
  this.bankaccount - Hamster.getPrice();

}
// why is my const bad?
const Timmy= new Person ("Timmy");





}
//gus
const Gus = new Hampster ("GUS");
Gus.owner = "Timmy"

// dinner chef
class Dinner { 
constructor(appetizer, entree, dessert){
  this.appetizer = appetizer;
  this.entree = entree;
  this.dessert = dessert;
}
}
class chef