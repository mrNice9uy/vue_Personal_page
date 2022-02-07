import VueRouter from "vue-router";
import HomePage from "./components/HomePage";
import Beer from "./components/Beer";
import About from "./components/About";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: HomePage,
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
