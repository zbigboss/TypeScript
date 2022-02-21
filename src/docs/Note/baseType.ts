/**
 * @author wjz
 * @date 2022/02/20 16:04
 */
let isDone: boolean = false;

//所有数字都是浮点数，类型为number。支持十、十六、二、八进制字面量
let example1: number = 6;
let example2: number = 0xf00d;

let name1: string = "xxp";
name1 = 'wjz';
let age: number = 37
let name3: string = `my age is ${age+1}`

const list: number[] = [1,2,3];
const listString: string[] = ["wjz","xxxxx"]
const listBoolean: boolean[] = [false,true]

//元组
const tuple: [string,number] = ["10",9];

//枚举
enum Color{
    Red = 22,
    Green = 33,
    Blue = 44
}
const color: number = Color.Red

//any  void never object null undefined 类型断言as
let nuture: any = 2
nuture = "xxxx"
function warnUser(): void{
    console.log("2222333334444")
}


