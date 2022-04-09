/**
 * @author wjz
 * @date 2022/04/09 11:02
 */
//类
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello," + this.greeting;
  }
}
let greeter = new Greeter("world");

//继承
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof!Woof!');
  }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


class Animal2 {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal2 {
  constructor(name: string) { super(name); }  // 派生类包含构造函数，必须调用super()，它会执行基类的构造函数。在构造里访问this的属性之前，我们一定要调用super()
  move(distanceInMeters = 5) {
    console.log("Slithering……");
    super.move(distanceInMeters);
  }
}
class Horse extends Animal2 {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping……");
    super.move(distanceInMeters);
  }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);


//public
class Animal3 {
  public name: string;
  public constructor(theName: string) { this.name = theName; }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

//private 不能再声明它的类的外部访问
class Animal4 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}
new Animal4("Cat").name; //error,属性“name”为私有属性，只能在类“Animal4”中访问

// protected 与private修饰符行为相似，不同点：protected成员在派生类中仍可以访问
class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}
class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name)
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello,my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howard = new Employee("howard", "sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error

//静态属性   在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) { }
}
let gird1 = new Grid(1.0);
let gird2 = new Grid(5.0);
console.log(gird1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(gird2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

//抽象类
abstract class Animal5 {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch……');
  }
}

//类当做接口使用
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };

