import Vue from "vue";
import VueRouter from "vue-router";

import Beer from "../components/Beer";
import Personal from "../components/Personal";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      componet: Beer,
    },
    {
      path: "/personal",
      componet: Personal,
    },
  ],
});
