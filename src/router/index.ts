import { createRouter, createWebHistory } from "vue-router";
import TodoList from "@/views/TodoList.vue";
import Menu from "@/views/Menu.vue";

let history = createWebHistory();
let routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu
  },
  {
    path: "/",
    name: "todoList",
    component: TodoList
  }
]
export default createRouter({history, routes})
