import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "Users",
      path: "/",
      component: () => import("./components/userList.vue"),
    },
    {
      name: "Profile",
      path: "/user/:id(\\d+)/:sex()",
      component: () => import("./components/user.vue"),
      children: [
        {
          name: "Albums",
          path: "/user/:id(\\d+)/:sex()/albums",
          component: () => import("./components/albums.vue"),
        },
        {
          name: "Posts",
          path: "/user/:id(\\d+)/:sex()/Posts",
          component: () => import("./components/Posts.vue"),
        },
      ],
      redirect: { name: 'Posts' } 
    },
  ],
});
