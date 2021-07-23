<template lang="pug">
#Menu
  span 目錄
  router-link(to="/") todoList
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Menu"
})
</script>