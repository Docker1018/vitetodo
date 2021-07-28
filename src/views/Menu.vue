<template lang="pug">
#Menu
  span 目錄
  a(@click="menuRoute('/views/SidePage/TodoList')") todoList
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Menu",
  setup() {
    const router = useRouter();
    const menuRoute = (path: string) => {
      router.push({
        path: path
      });
    };
    return {
      menuRoute
    }
  }
});
</script>
