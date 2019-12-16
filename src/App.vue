<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.simplebar-scrollbar:before {
  background-color: #fff;
  opacity: 1;
}
::-webkit-scrollbar {
  width: 7px;
  background-color: #7c849271;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #dce4f39a;
  border-radius: 10px;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #dce4f39a;
}
::-webkit-scrollbar-thumb:active {
  border: 0;
  border-radius: 0;
  background-color: #57df7573;
}
::-webkit-scrollbar-thumb:window-inactive {
  background-color: #dce4f32f;
}
</style>
