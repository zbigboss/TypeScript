/**
 * @author wjz
 * @date 2022/04/08 23:33
 */
//可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

//只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

//可索引的类型
interface StringArray {
  [index: number] :string;
}
let myArray: StringArray;
myArray = ["Bob","Fred"];
let myStr: string = myArray[0];

//继承接口
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;