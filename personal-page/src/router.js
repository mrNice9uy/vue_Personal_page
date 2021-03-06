import VueRouter from "vue-router";
import Home from "./components/Home";
import Beer from "./components/Beer";
import About from "./components/About";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/beer",
      component: Beer,
    },
  ],
  mode: "history",
});
