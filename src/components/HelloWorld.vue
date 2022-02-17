<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
    <button @click="page">测试</button>
    <button @click="test">测试2</button>
  </div>
</template>

<script setup name="HelloWorld">
// import test from "../test/test";
// import { greeter } from "../test/hello"
import  mySquare  from "../docs/Note/0217";
import { ref } from "vue";
const page = () => {
  console.log("hi,xxp");
  let currentTime = new Date();
  return console.log(greeter);
};
const count = ref(0);
const defineProps = {
  msg: String,
};
const test = () => {
  console.log(mySquare);
};
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//   data() {
//     return {
//       count: 0
//     }
//   }
// }
</script>
