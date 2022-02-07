import Vue from "vue";
import Router from "vue-router";
import Home from "@views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      componet: Home,
    },
    {
      path: "beer",
      componet: () => import("./views/Beer.vue"),
    },
  ],
});
