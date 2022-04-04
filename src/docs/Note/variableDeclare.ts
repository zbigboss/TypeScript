/**
 * @author wjz
 * @date 2022/02/20 17:54
 * @date 2022/04/04 22:46   
 */
try {
    throw 'no'
} catch (e) {
    console.log(e)
}

function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    };
    return x;
}
f(true); // 10  由于var非函数作用域，故能访问
f(false); // undefined

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {  // var 声明变量不好，变量存在泄漏情况
            sum += currentRow[i];
        }
    }
    return sum;
}

// 函数结构
let input = [1, 2] as [number, number];
function ff([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
ff(input);

// 默认值
function keepWholeObject(wholeObject: { a: string, b?: string }) {
    let { a, b = 1001 } = wholeObject;
}

class C {
    p = 12;
    m() {
        
    }
}
let c = new C();
let clone = { ...c };
clone.p;
clone.m(); //error!