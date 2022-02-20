<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <typeScriptStudy />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import typeScriptStudy from './views/typeScriptStudy.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    typeScriptStudy
  }
}
</script>
