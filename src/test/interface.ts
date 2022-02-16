interface Hello{
    loading?: string,  //可选属性
    readonly age:number, //只读
    run?
}

/**
 * 缺少属性：
类型 "{ loading: string; }" 中缺少属性 "age"，
 但类型 "Hello" 中需要该属性。ts(2741)
interface.ts(3, 14): 在此处声明了 "age"。
 */
const where: Hello = {
    loading:'where',
}

/**
 * 不可溢出：
 不能将类型“{ loading: string; age: number; sex: string; }”
 分配给类型“Hello”。
  对象文字可以只指定已知属性，并且“sex”不在类型“Hello”中。
 */
const what: Hello = {
    loading: "xxp",
    age: 34,
    sex: "ggg"
}