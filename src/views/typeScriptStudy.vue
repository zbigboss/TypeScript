<template>
  <div>
    <button @click="baseType">基础类型</button>
    <div v-show="test">{{ name3 }}</div>
    <button @click="tupleRefactor">元组</button>
    <div>{{ color }}</div>
    <button @click="changeColor">改变颜色</button>
    <button @click="noType">无类型</button>
  </div>
</template>

<script lang="ts" setup name="typeScriptStudy">
import { ref, reactive } from "vue";
const test = ref(false as boolean);
const baseType = () => {
  test.value = true;
};
let age: number = 37;
const name3: string = `my age is ${age + 1}`;
const tuple = ref(["10", 9] as [string, number]);
const tupleRefactor = () => {
  console.log(tuple);
  tuple.value = ["222", 88];
  console.log(tuple.value);
};
enum Color {
  Red = "红色",
  Green = 33,
  Blue = 44,
}
// let color: string = Color.Red
const color = ref(Color.Red as string);
const changeColor = () => {
  color.value = "蓝色";
};
function warnUser(): void {
  console.log("2222333334444");
}
const noType = () => {
  warnUser();
};
</script>
