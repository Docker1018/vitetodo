import { createRouter, createWebHistory } from "vue-router";
import routes from "./autoRouter";
import Menu from "@/views/Menu.vue";

routes.push(
  {
    path: "/",
    name: "Menu",
    component: Menu
  }
)
console.log(routes);
export default createRouter({
  history: createWebHistory(),
  routes
})
