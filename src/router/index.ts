import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";

let history = createWebHistory();
let routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList
  }
]
export default createRouter({history, routes})
